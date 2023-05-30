import axios from 'axios';
import { authByPassword } from './userAPI';
let accessToken;

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const paralectSecretKey = (config) => {
  config.headers['x-secret-key'] = 'GEU4nvd3rej*jeh.eqp';
  return config;
};
const clientSecretKey = (config) => {
  config.headers['X-Api-App-Id'] =
    'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';
  return config;
};

const addAccessToken = async (config) => {
  if (!localStorage.getItem('access')) {
    await authByPassword();
  }
  config.headers['Authorization'] = `Bearer ${localStorage.getItem('access')}`;
  return config;
};

$authHost.interceptors.request.use(paralectSecretKey);
$authHost.interceptors.request.use(clientSecretKey);
$host.interceptors.request.use(paralectSecretKey);
$host.interceptors.request.use(clientSecretKey);
$host.interceptors.request.use(addAccessToken);

$host.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return refreshAccessToken().then(() => {
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        localStorage.setItem('access', accessToken);
        return axios(originalRequest);
      });
    }

    return Promise.reject(error);
  },
);

async function refreshAccessToken() {
  try {
    const response = await $authHost.get('/2.0/oauth2/refresh_token/', {
      params: {
        refresh_token: localStorage.getItem('refresh'),
        client_id: 2356,
        client_secret:
          'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
      },
    });
    accessToken = response.data.access_token;
  } catch (err) {
    throw err;
  }
}

export { $host, $authHost };
