import React from 'react';
import { Routes, Route, redirect } from 'react-router-dom';
import { routes } from '../routes/routes';
import { MAIN_ROUTE } from '../utils/consts';
import { Navigate } from 'react-router-dom';

function AppRouter() {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  );
}

export default AppRouter;
