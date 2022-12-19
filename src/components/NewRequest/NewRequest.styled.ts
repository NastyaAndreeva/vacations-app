import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const NewRequestFormStyled = styled(Form)`
  padding: 20px;
  margin-top: 50px;
  display: flex;
  /* align-items: stretch; */
  flex-direction: column;
  width: 1000px;
  margin: 0 auto;
  /* justify-content: space-between; */
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const NotesInputContainer = styled.div`
  position: relative;
  display: flex;
  margin-left: 150px;
  flex-direction: column;
  margin-bottom: 30px;
`;

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

export const NotesInput = styled(Field)`
  display: block;
  width: 400px;
  height: 300px;
  color: darkblue;
  font-size: 16px;
  background: #ffffff;
  border: 2px solid #cacaca;
  border-radius: 5px;
  line-height: 25px;
  padding: 10px 15px;
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

export const ErrorMessage = styled.p`
  color: tomato;
  width: 300px;
  position: absolute;
  top: 75px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 35px;
  width: 200px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: lightblue;
  color: black;
  border-radius: 10px;
  font-size: 20px;
  &:hover,
  &:focus {
    background-color: beige;
  }
  transition: background-color 300ms ease;
`;

export const NewRequestContainer = styled.div`
  display: flex;
`;
