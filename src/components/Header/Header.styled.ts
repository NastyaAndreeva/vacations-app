import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
padding-top: 20px;
padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const BackButton = styled(NavLink)`
`

export const HeaderTitle = styled.h2`
  font-weight: 400;
`

export const HeaderName = styled.div`
width: 50px;
height: 50px;
cursor: pointer;
border: 2px solid black;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
`
