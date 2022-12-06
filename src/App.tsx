import React, { FC } from 'react';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Global, css } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import SystemLayout from './layout';

const Login = lazy(() => import('./pages/LoginPage'));
const Dashboard = lazy(() => import('./pages/DashBoard'));
const AddEdit = lazy(() => import('./pages/AddEdit'));

const App: FC = () => {
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
          <Route path="/" element={<SystemLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/edit" element={<AddEdit />} />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
