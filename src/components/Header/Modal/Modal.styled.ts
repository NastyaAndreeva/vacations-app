import styled from '@emotion/styled';

export const ModalStyled = styled.div`
  position: absolute;
  top: 80px;
  right: -80px;
  cursor: auto;
  border: 2px solid black;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

export const EmailStyled = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  border-radius: 10px;
  border: none;
  text-decoration: underline;
  background-color: lightcyan;
  padding: 10px 30px;
  font-size: 18px;
  font-weight: 700;
  &:hover {
    background-color: lightgreen;
  }
  transition: background-color 500ms ease;
`;
