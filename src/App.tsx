import React, { FC, useState, useEffect } from 'react';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Global, css } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import SystemLayout from './components/SystemLayout';
import PrivateRoute from 'hocs/PrivateRoute';
import PublicRoute from 'hocs/PublicRoute';

const Login = lazy(() => import('./pages/LoginPage'));
const Dashboard = lazy(() => import('./pages/DashBoard'));
const AddEdit = lazy(() => import('./pages/AddEdit'));

interface Vacation {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  note: string;
}

const App: FC = () => {
  const vacations: Vacation[] = [];
  return (
    <div>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: Helvetica, Arial, sans-serif;
          }
          *,
          ::before,
          ::after {
            box-sizing: border-box;
          }
        `}
      />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<SystemLayout title="Dashboard" />}>
            <Route
              path="/"
              index
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<Dashboard vacations={vacations} />}
                />
              }
            />
            <Route
              path="/edit"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<AddEdit vacations={vacations} />}
                />
              }
            />
          </Route>
          <Route
            path="/login"
            element={
              <PublicRoute restricted redirectTo="/" component={<Login />} />
            }
          />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
