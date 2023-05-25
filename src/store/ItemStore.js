import { makeAutoObservable } from 'mobx';
export default class ItemStore {
  constructor() {
    this._catalog = [];
    this._salaryFrom = '';
    this._salaryTo = '';
    this._search = '';

    this._filter = [{ type: '', from: '', to: '' }];

    this._vacancies = [];
    this._favorite = [];
    this._page = 0;
    this._toggle = false;
    makeAutoObservable(this);
  }
  setCatalog(type) {
    this._catalog = type;
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

  get catalog() {
    return this._catalog;
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
  pushCatalog(item) {
    this._catalog.push(item);
  }
}
