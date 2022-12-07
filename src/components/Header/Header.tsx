import { FC } from 'react';
import Container from '../Container';
import { HeaderStyled, BackButton, HeaderTitle } from './Header.styled';

interface HeaderProps {
  action?: boolean;
  title: string;
}

const Header: FC<HeaderProps> = ({ action = false, title }) => {
  return (
    <Container>
      <HeaderStyled>
        {action && <BackButton to="/">Back</BackButton>}
        <HeaderTitle>{title}</HeaderTitle>
        <div>Name</div>
      </HeaderStyled>
    </Container>
  );
};

export default Header;
