import React, { useState } from 'react';
import VacancyMain from '../../components/VacancyMain';
import PaginationItem from '../../components/UI/PaginationItem';
import { useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../';
import { fetchFavorite } from '../../http/ItemAPI';
import { Loader } from '@mantine/core';
import Boy from '../../assets/boy.png';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/consts';

const FavoriteVacancy = observer(() => {
  const { item } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFavorite(
      Object.keys(localStorage).filter((i) => i != 'refresh' && i != 'access'),
      item.page,
    ).then((data) => {
      console.log(data.objects);
      item.setFavorite(data.objects);
    });
  }, [item.page, item.toggle]);

  return (
    <div className="favorite_wrapper" style={{ paddingTop: 40 }}>
      <div className="content">
        {Object.keys(localStorage).filter(
          (i) => i != 'refresh' && i != 'access',
        ).length ? (
          <div>
            {loading ? (
              <Loader size="xl" variant="dots" style={{ margin: 'auto' }} />
            ) : (
              item.favorite.map((vacancy) => (
                <VacancyMain
                  key={vacancy.id}
                  vacancy={vacancy}
                  data-elem={`vacancy-${vacancy.id}`}
                  className="111111111"
                />
              ))
            )}
          </div>
        ) : (
          <div className="nothing">
            <img src={Boy} alt="boy" />
            <span className="nothing_title">Усп, здесь еще ничего нет</span>
            <Button type="submit" mt="sm" onClick={() => navigate(MAIN_ROUTE)}>
              Поиск вакансий
            </Button>
          </div>
        )}
      </div>
      {Object.keys(localStorage).filter((i) => i != 'refresh' && i != 'access')
        .length > 4 ? (
        <PaginationItem />
      ) : (
        ''
      )}
    </div>
  );
});

export default FavoriteVacancy;
