import { FC } from 'react';
import { Container } from '../../components/ui/Container';
import { HeaderStyled, BackButton, HeaderTitle } from './Header.styled';
import { useLocation } from 'react-router-dom';

const Header: FC = () => {
  const nav = useLocation();
  const isEditPage = nav.pathname.includes('edit');

  return (
    <Container>
      <HeaderStyled>
        {isEditPage ? <BackButton to="/">Back</BackButton> : <div></div>}

        {isEditPage ? (
          <HeaderTitle>Request new vacation/Edit vacation</HeaderTitle>
        ) : (
          <HeaderTitle> Dashboard</HeaderTitle>
        )}
        <div>Name</div>
      </HeaderStyled>
    </Container>
  );
};

export default Header;
