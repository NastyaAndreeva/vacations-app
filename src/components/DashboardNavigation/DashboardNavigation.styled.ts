import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;
export const LeftSideNavigation = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
`;

export const AddNewButton = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: space-between;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  border: 2px solid black;
  border-radius: 10px;
  &:hover {
    color: tomato;
  }
`;
