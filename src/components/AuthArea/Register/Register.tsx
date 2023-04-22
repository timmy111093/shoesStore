import React, { FC } from 'react';
import {useForm} from 'react-hook-form';
import User from '../../../models/User';
import * as Auth from '../../../auth/authSlice';
import Button from '../../Button/Button';
import FormErrors from '../../FormErrors/FormErrors';
import styles from './Register.module.scss';
import { registerAsync } from '../../../fetch/auth';
import { useAppDispatch } from '../../../hooks';
import { useNavigate } from 'react-router-dom';
import authValidation from '../authValidation';

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {

  const navigate = useNavigate();
  const {register,handleSubmit, formState} = useForm<User>();
  const dispatch = useAppDispatch();

  const registerHandler = async (user:User) => {
    try{
      const token = await registerAsync(user);
      dispatch(Auth.registration(token));

      alert('registration succeed!!!');
      navigate('/home');
      console.log(token);

    }catch(error){
      console.log('error:' + error);
    }
  }

  return(
    <div className={`Box ${styles.Register}`}>
                  <h3>Register</h3>
          <form onSubmit={handleSubmit(registerHandler)}>
            <FormErrors error={formState.errors.firstName?.message}>
              <label>first name:</label>
              <input type="text" {...register('firstName', authValidation.firstName)}/>
            </FormErrors>
            <FormErrors error={formState.errors.lastName?.message}>
              <label>last name:</label>
              <input type="text" {...register('lastName', authValidation.lastName)}/>
            </FormErrors>
            <FormErrors error={formState.errors.username?.message}>
              <label>username:</label>
              <input type="text" {...register('username', authValidation.username)}/>
            </FormErrors>
            <FormErrors error={formState.errors.password?.message}>
              <label>password:</label>
              <input type="password" {...register('password', authValidation.password)}/>
            </FormErrors>
            <Button>Register</Button>
          </form>
    </div>
  );
}

export default Register;
