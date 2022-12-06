import styled from '@emotion/styled';
import {  Form, Field } from 'formik';

export const LoginFormStyled = styled(Form)`
width: 500px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
border: 2px solid black;
border-radius: 15px;
padding: 20px;
margin-top: 50px;
`

export const InputContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
margin-bottom: 30px;`

export const LoginFormTitle = styled.h2`
text-align: center;
`

export const Input = styled(Field)`
  color: darkblue;
  font-size: 16px;
  background: #ffffff;
  border: 2px solid #cacaca;
  border-radius: 5px;
  line-height: 25px;
  padding: 10px 15px;
  width: 300px;
  outline: none;
  &:focus {
    color: teal;
    border: 2px solid #000;
  }
`;

export const Label = styled.label`
  margin-bottom: 20px;
  width: 300px;
`;

export const CheckboxContainer = styled.div`
display: flex;
align-items: center;
width: 300px;
`

export const StyledCheckbox = styled(Field)`
width: 20px;
height: 20px;
margin-right: 15px;
`

export const ErrorMessage = styled.p`
color: tomato;
width: 300px;
position: absolute;
top: 75px;
`