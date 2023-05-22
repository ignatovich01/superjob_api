import { FAVORITE_ROUTE, MAIN_ROUTE } from '../utils/consts';
import VacancyPage from '../pages/VacancyPage/VacancyPage';
import FavoriteVacancy from '../pages/FavoriteVacancy/FavoriteVacancy';
import FindVacancy from '../pages/FindVacancy/FindVacancy';

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: FindVacancy,
  },
  {
    path: FAVORITE_ROUTE,
    Component: FavoriteVacancy,
  },
  {
    path: MAIN_ROUTE + '/:id',
    Component: VacancyPage,
  },
];
