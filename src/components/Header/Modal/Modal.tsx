import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalStyled, LogoutButton, EmailStyled } from './Modal.styled';

interface ModalProps {
  email: string;
}

const Modal: FC<ModalProps> = ({ email }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
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
