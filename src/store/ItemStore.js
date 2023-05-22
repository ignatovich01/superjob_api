import { makeAutoObservable } from 'mobx';
export default class ItemStore {
  constructor() {
    this._typeOfWork = [
      { value: 6, label: 'полный день' },
      { value: 10, label: 'неполный день' },
      { value: 12, label: 'сменный график' },
      { value: 13, label: 'частичная занятость' },
      { value: 7, label: 'временная работа' },
      { value: 9, label: 'выхтовым методом' },
    ];
    this._salaryFrom = [
      { value: 5000, label: '5k' },
      { value: 10000, label: '10k' },
      { value: 20000, label: '20k' },
      { value: 30000, label: '30k' },
      { value: 4000, label: '40k' },
      { value: 50000, label: '50k' },
      { value: 80000, label: '80k' },
      { value: 100000, label: '100k' },
      { value: 120000, label: '120k' },
      { value: 150000, label: '150k' },
    ];
    this._salaryTo = [
      { value: 5000, label: '5k' },
      { value: 10000, label: '10k' },
      { value: 20000, label: '20k' },
      { value: 30000, label: '30k' },
      { value: 4000, label: '40k' },
      { value: 50000, label: '50k' },
      { value: 80000, label: '80k' },
      { value: 100000, label: '100k' },
      { value: 120000, label: '120k' },
      { value: 150000, label: '150k' },
    ];
    this._search = '';

    this._filter = [{ type: '', from: '', to: '' }];

    this._vacancies = [];
    this._favorite = [];
    this._page = 0;
    this._toggle = false;
    makeAutoObservable(this);
  }
  setTypeOfWork(type) {
    this._typeOfWork = type;
  }
  setSalaryFrom(salary) {
    this._salaryFrom = salary;
  }
  setSalaryTo(salary) {
    this._salaryTo = salary;
  }
  setSearch(search) {
    this._search = search;
  }
  setFilter(filters) {
    this._filter = filters;
  }
  setVacancies(vacancies) {
    this._vacancies = vacancies;
  }
  setFavorite(fav) {
    this._favorite = fav;
  }
  setPage(page) {
    this._page = page;
  }
  setToggle() {
    this._toggle = !this.toggle;
  }

  get typeOfWork() {
    return this._typeOfWork;
  }
  get salaryFrom() {
    return this._salaryFrom;
  }
  get salaryTo() {
    return this._salaryTo;
  }
  get search() {
    return this._search;
  }
  get filter() {
    return this._filter;
  }
  get vacancies() {
    return this._vacancies;
  }
  get favorite() {
    return this._favorite;
  }
  get page() {
    return this._page;
  }
  get toggle() {
    return this._toggle;
  }
}
