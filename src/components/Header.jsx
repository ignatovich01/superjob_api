import React from 'react';
import Union from '../assets/Union.png';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FAVORITE_ROUTE, MAIN_ROUTE } from '../utils/consts';

function Header() {
  const location = useLocation();
  const isFavoritePage = location.pathname === FAVORITE_ROUTE;
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header_left" onClick={() => navigate(MAIN_ROUTE)}>
        <img src={Union} alt="union" />
        Jobored
      </div>

      <div className="header_rigth">
        <div className="header_buttons">
          {isFavoritePage ? (
            <div className="header_buttons">
              <NavLink
                style={{ textDecoration: 'none', color: 'black' }}
                to={MAIN_ROUTE}
                className="active">
                Поиск Вакансий
              </NavLink>
              <NavLink style={{ textDecoration: 'none' }} to={FAVORITE_ROUTE}>
                Избранное
              </NavLink>
            </div>
          ) : (
            <div className="header_buttons">
              <NavLink
                style={{ textDecoration: 'none' }}
                to={MAIN_ROUTE}
                className="active">
                Поиск Вакансий
              </NavLink>
              <NavLink
                style={{ textDecoration: 'none', color: 'black' }}
                to={FAVORITE_ROUTE}>
                Избранное
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
