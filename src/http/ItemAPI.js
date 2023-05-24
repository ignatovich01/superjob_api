import { $host } from '.';
// /2.0/catalogues/

export const fetchCatalogues = async () => {
  const { data } = await $host.get('/2.0/catalogues/');
  return data;
};
export const fetchItems = async (
  catalogues,
  salaryFrom,
  salaryTo,
  search,
  pages,
) => {
  const { data } = await $host.get('/2.0/vacancies/', {
    params: {
      catalogues: catalogues,
      payment_from: salaryFrom,
      payment_to: salaryTo,
      keyword: search,
      count: 4,
      page: pages,
      published: 1,
    },
  });
  return data;
};

export const fetchFavorite = async (ids, pages) => {
  const { data } = await $host.get('/2.0/vacancies/', {
    params: {
      ids,
      count: 4,
      page: pages - 1,
      published: 1,
    },
  });
  return data;
};

export const fetchOne = async (id) => {
  const { data } = await $host.get('/2.0/vacancies/', {
    params: {
      published: 1,
      ids: [id],
    },
  });
  return data;
};
