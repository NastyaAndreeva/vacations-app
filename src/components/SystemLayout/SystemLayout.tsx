import React, { FC } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header';
import Loader from '../Loader';
import Container from '../Container';

interface SystemLayoutProps {
  title: string;
}

const SystemLayout: FC<SystemLayoutProps> = ({ title }) => {
  return (
    <>
      <Container>
        <Header title={title} />
      </Container>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SystemLayout;
