import React, { useContext, useState } from 'react';
import lupa from '../assets/lupa.png';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Button } from '@mantine/core';
const Search = observer(() => {
  const { item } = useContext(Context);
  const [search, setSearch] = useState('');
  function searchButton() {
    item.setSearch(search);

    setSearch('');
  }
  return (
    <div className="search">
      <div>
        <img src={lupa} alt="lupa" />
        <input
          data-elem="search-input"
          type="text"
          placeholder="Введите название вакансии"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Button
        data-elem="search-button"
        className="search_button"
        type="submit"
        mt="sm"
        onClick={() => searchButton()}>
        Поиск
      </Button>
    </div>
  );
});

export default Search;
