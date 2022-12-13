import { FC, useState } from 'react';
import Container from '../Container';
import {
  HeaderStyled,
  BackButton,
  HeaderTitle,
  HeaderName,
} from './Header.styled';
import Modal from './Modal';

interface HeaderProps {
  action?: boolean;
  title: string;
}

const Header: FC<HeaderProps> = ({ action = false, title }) => {
  const user = localStorage.getItem('user') || sessionStorage.getItem('user');
  const email = user && JSON.parse(user).email;
  const emailSymbol = email?.slice(0, 1).toUpperCase();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <HeaderStyled>
        {action && <BackButton to="/">Back</BackButton>}
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderName onClick={() => setIsOpen(!isOpen)}>
          {emailSymbol}
          {isOpen && <Modal email={email} />}
        </HeaderName>
      </HeaderStyled>
    </Container>
  );
};

export default Header;
