import { LOCALE_STORAGE_AUTH_KEY } from 'constants/localeStorageAuth';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalStyled, LogoutButton, EmailStyled } from './Modal.styled';

interface ModalProps {
  email: string;
}

const Modal: FC<ModalProps> = ({ email }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem(LOCALE_STORAGE_AUTH_KEY);
    sessionStorage.removeItem(LOCALE_STORAGE_AUTH_KEY);
    navigate('/login');
  };
  return (
    <ModalStyled>
      <EmailStyled>{email}</EmailStyled>
      <LogoutButton type="button" onClick={handleLogout}>
        Log Out
      </LogoutButton>
    </ModalStyled>
  );
};

export default Modal;
