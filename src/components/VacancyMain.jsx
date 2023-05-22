import React, { useEffect, useState } from 'react';
import StarEmpty from '../assets/Star.png';
import StarFull from '../assets/StarFull.png';
import Location from '../assets/location.png';
import dot from '../assets/dot.svg';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../utils/consts';
const VacancyMain = observer(({ vacancy, data }) => {
  const [toggle, setToggle] = useState('');
  const { item } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {}, [toggle]);

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

  if (vacancy.profession.length > 50) {
    vacancy.profession = vacancy.profession.slice(0, 50) + '...';
  }

  return (
    <div
      data-elem={`vacancy-${vacancy.id}`}
      className="vacancyMain"
      onClick={() => navigate(`${MAIN_ROUTE}${vacancy.id}`)}>
      <div className="left">
        <h2>{vacancy.profession}</h2>

        <div className="vacancy_body">
          <div className="salary">
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
          <img src={dot} alt="dot" className="dot" />
          <div className="worktype"> {vacancy.type_of_work.title}</div>
        </div>

        <div className="location">
          <img src={Location} alt="location" />
          <span>{vacancy.town.title || vacancy.address}</span>
        </div>
      </div>

      <div className="rigth ">
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
  );
});

export default VacancyMain;
