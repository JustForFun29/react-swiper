import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './RegistrationElements';

const Registration = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Signal</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Зарегистрироваться</FormH1>
              <FormLabel htmlFor='for'>Ваше имя</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Ваша фамилия</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Пароль</FormLabel>
              <FormInput type='password' required />
              <FormLabel htmlFor='for'>Повторите пароль</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Войти</FormButton>
              <Text>Забыли пароль</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Registration;