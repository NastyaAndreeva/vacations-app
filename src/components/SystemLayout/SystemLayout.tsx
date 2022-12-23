import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header';
import Loader from '../Loader';
import Container from '../Container';

const SystemLayout = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SystemLayout;
