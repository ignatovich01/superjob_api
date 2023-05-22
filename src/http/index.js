import axios from 'axios';

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const paralectSecretKey = (config) => {
  config.headers['x-secret-key'] = 'GEU4nvd3rej*jeh.eqp';
  config.headers['Authorization'] = `Bearer ${localStorage.getItem('access')}`;

  return config;
};

const clientSecretKey = (config) => {
  config.headers['X-Api-App-Id'] =
    'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';

  return config;
};
$host.interceptors.request.use(paralectSecretKey);
$host.interceptors.request.use(clientSecretKey);

export { $host };
