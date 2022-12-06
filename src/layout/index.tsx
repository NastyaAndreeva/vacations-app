import React, { FC } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

import Header from './Header';
import Loader from './Loader';
import { Container } from '../components/ui/Container';

const SystemLayout: FC = () => {
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
