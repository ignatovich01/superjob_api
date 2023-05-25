import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../index';
import StarEmpty from '../../assets/Star.png';
import StarFull from '../../assets/StarFull.png';
import Location from '../../assets/location.png';
import dot from '../../assets/dot.svg';
import { useParams } from 'react-router-dom';
import { fetchOne } from '../../http/ItemAPI';
import { Loader } from '@mantine/core';
import { observer } from 'mobx-react-lite';
const VacancyPage = observer(() => {
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState('');
  const { item } = useContext(Context);

  const [vacancy, setVacancy] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchOne(id).then((data) => {
      setVacancy(data.objects[0]);

      setTimeout(() => {
        setLoading(true);
      }, 500);
    });
  }, []);

  function createMarkup() {
    return { __html: vacancy.vacancyRichText };
  }
  function toggleFavorite(e) {
    e.stopPropagation();
    item.setToggle();
    if (localStorage.getItem(vacancy.id)) {
      setToggle(null);
      localStorage.removeItem(vacancy.id);
    } else {
      localStorage.setItem(vacancy.id, vacancy.id);
      setToggle(vacancy.id);
    }
  }
  return (
    <div className="vacancy_page">
      {loading ? (
        <div className="wrapper">
          <div className="page_header">
            <div className="page_left">
              <div className="page_title">
                {vacancy.profession ? vacancy.profession : ''}
              </div>
              <div className="salary_work">
                <div className="page_salary">
                  зп{' '}
                  {
                    //1
                    vacancy.payment_from != 0 && vacancy.payment_to != 0
                      ? `от ${vacancy.payment_from}`
                      : ''
                  }
                  {
                    //2
                    vacancy.payment_from != 0 && vacancy.payment_to == 0
                      ? `от ${vacancy.payment_from}`
                      : ''
                  }
                  {
                    //3
                    vacancy.payment_from == 0 && vacancy.payment_to != 0
                      ? `до ${vacancy.payment_to}`
                      : ''
                  }
                  {
                    //4
                    vacancy.payment_from == 0 && vacancy.payment_to == 0
                      ? `не указано`
                      : ''
                  }
                  {'  '}
                  {vacancy.currency}
                </div>
                <img src={dot} alt="dot" className="page_dot" />
                <div className="page_worktype">
                  {' '}
                  {vacancy.type_of_work.title}
                </div>
              </div>
              <div className="page_location">
                {' '}
                <img src={Location} alt="loc" style={{ marginRight: 11 }} />
                {vacancy.town.title || vacancy.address}
              </div>
            </div>
            <div className="page_right">
              {localStorage.getItem(vacancy.id) ? (
                <img
                  data-elem={`vacancy-${vacancy.id}-shortlist-button`}
                  id="star"
                  onClick={(e) => toggleFavorite(e)}
                  src={StarFull}
                  alt="star"
                  className="star"
                />
              ) : (
                <img
                  data-elem={`vacancy-${vacancy.id}-shortlist-button`}
                  id="star"
                  onClick={(e) => toggleFavorite(e)}
                  src={StarEmpty}
                  alt="star"
                  className="star"
                />
              )}
            </div>
          </div>
          <div
            className="page_body"
            dangerouslySetInnerHTML={createMarkup()}></div>
        </div>
      ) : (
        <Loader size="xl" variant="dots" style={{ margin: 'auto' }} />
      )}
    </div>
  );
});

export default VacancyPage;
