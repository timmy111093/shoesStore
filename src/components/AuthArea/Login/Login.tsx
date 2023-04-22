import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import Credentials from '../../../models/Credentials';
import FormErrors from '../../FormErrors/FormErrors';
import styles from './Login.module.scss';
import Button from '../../Button/Button';
import { loginAsync } from '../../../fetch/auth';
import { useNavigate } from 'react-router-dom';
import {useAppDispatch} from '../../../hooks';
import { login } from '../../../auth/authSlice';
import Modal from '../../Modal/Modal';
import authValidation from '../authValidation';

interface LoginProps {}

const Login: FC<LoginProps> = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {register,handleSubmit,formState} = useForm<Credentials>();
  const loginHandler = async (credentials:Credentials) => {
    try{
      const token = await loginAsync(credentials);
      dispatch(login(token));
      alert('welcome back');
      navigate('/home');
    }catch(error){
      console.log('error:' + error);
    }
  }

  return(

    <div className={`Box ${styles.Login}`}>
      <h3>Login</h3>
      <form onSubmit={handleSubmit(loginHandler)}>
        <FormErrors error={formState.errors.username?.message}>
          <label>Username:</label>
          <input type="text" {...register('username', authValidation.username)}/>
        </FormErrors>
        <FormErrors error={formState.errors.password?.message}>
          <label>Password:</label>
          <input type="text" {...register('password', authValidation.password)}/>
        </FormErrors>
        <Button>Login</Button>
      </form>
    </div>

  );
}

export default Login;
