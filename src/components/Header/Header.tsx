import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Container from '../Container';
import {
  HeaderStyled,
  BackButton,
  HeaderTitle,
  HeaderName,
} from './Header.styled';
import Modal from './Modal';
import { useLocation, useParams } from 'react-router-dom';
import { getUser } from 'helpers';

const Header = () => {
  const { id } = useParams();
  const location = useLocation();
  const isShowBackLink = !(location.pathname === '/');
  const user = getUser();
  const email = user && JSON.parse(user).email;
  const emailSymbol = email?.slice(0, 1).toUpperCase();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <HeaderStyled>
        {isShowBackLink && (
          <BackButton to="/">
            <BiArrowBack size={56} />
          </BackButton>
        )}

        <HeaderTitle>
          {id ? `Request new request/ Edit vacation #${id}` : 'Dashboard'}
        </HeaderTitle>
        <HeaderName onClick={() => setIsOpen(!isOpen)}>
          {emailSymbol}
          {isOpen && <Modal email={email} />}
        </HeaderName>
      </HeaderStyled>
    </Container>
  );
};

export default Header;
