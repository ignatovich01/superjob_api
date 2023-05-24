import React, { useState } from 'react';
import Search from '../../components/Search';
import Filter from '../../components/Filter';
import VacancyMain from '../../components/VacancyMain';
import PaginationItem from '../../components/UI/PaginationItem';
import { useEffect, useContext } from 'react';
import { fetchItems, fetchCatalogues } from '../../http/ItemAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../../';
import Boy from '../../assets/boy.png';

const FindVacancy = observer(() => {
  const { item } = useContext(Context);

  useEffect(() => {
    fetchCatalogues().then((data) => {
      item.setCatalog([]);
      data.forEach((i) => item.pushCatalog({ value: i.key, label: i.title }));
    });
  }, []);
  useEffect(() => {
    fetchItems(
      item.filter.catalog,
      item.filter.from,
      item.filter.to,
      item.search,
      item.page,
      null,
    ).then((data) => {
      item.setVacancies(data.objects);
    });
  }, [
    item.filter.catalog,
    item.filter.from,
    item.filter.to,
    item.search,
    item.page,
  ]);

  return (
    <div className="findVacancy">
      <div className="top">
        <div className="find_left">
          <Filter />
        </div>

        <div className="find_right">
          <Search />

          {item.vacancies.length ? (
            item.vacancies.map((vacancy) => (
              <VacancyMain key={vacancy.id} vacancy={vacancy} />
            ))
          ) : (
            <img src={Boy} alt="empty(" className="boy" />
          )}
        </div>
      </div>
      <PaginationItem />
    </div>
  );
});

export default FindVacancy;
