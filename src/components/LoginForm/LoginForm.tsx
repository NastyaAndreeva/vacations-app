import { FC } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import {
  LoginFormStyled,
  LoginFormTitle,
  Input,
  Label,
  CheckboxContainer,
  StyledCheckbox,
  ErrorMessage,
  InputContainer,
  Button,
} from './LoginForm.styled';
import { LOCALE_STORAGE_AUTH_KEY } from 'constants/localeStorageAuth';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

interface MyFormValues {
  email: string;
  password: string;
  remember: boolean;
}

const LoginForm: FC = () => {
  const navigate = useNavigate();

  const initialValues: MyFormValues = {
    email: '',
    password: '',
    remember: false,
  };

  const handleSubmit = (values: MyFormValues) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    if (values.remember) {
      localStorage.setItem(LOCALE_STORAGE_AUTH_KEY, JSON.stringify(user));
    } else {
      sessionStorage.setItem(LOCALE_STORAGE_AUTH_KEY, JSON.stringify(user));
    }

    navigate('/');
  };

  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <LoginFormStyled>
          <LoginFormTitle>Login</LoginFormTitle>
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="Email" />
            {errors.email && touched.email ? (
              <ErrorMessage>{errors.email}</ErrorMessage>
            ) : null}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" placeholder="Password" />
            {errors.password && touched.password ? (
              <ErrorMessage>{errors.password}</ErrorMessage>
            ) : null}
          </InputContainer>
          <CheckboxContainer>
            <StyledCheckbox type="checkbox" id="remember" name="remember" />
            <label htmlFor="checkbox">Remember me</label>
          </CheckboxContainer>
          <Button type="submit">Login</Button>
        </LoginFormStyled>
      )}
    </Formik>
  );
};

export default LoginForm;
