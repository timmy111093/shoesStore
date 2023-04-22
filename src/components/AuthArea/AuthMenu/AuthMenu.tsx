import React, { FC } from 'react';
import styles from './AuthMenu.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {NavLink} from 'react-router-dom';
import { logout } from '../../../auth/authSlice';

interface AuthMenuProps {}

const AuthMenu: FC<AuthMenuProps> = () => {

  const dispatch = useAppDispatch();
  const {user} = useAppSelector((state) => state.authState);

  const logOutHandler = () => {
    dispatch(logout());
  }

  const renderContent = () => {
    if(user){
      return(
        <>
        <h5>{user.firstName} {user.lastName} is connected</h5>
        <NavLink to='#' onClick={logOutHandler}><button>Log-out</button></NavLink>
        </>
      )
    }
    return(
      <>
      <h5>!Hello Guest</h5>
      <NavLink to="/register"><button>Register</button></NavLink>
      <NavLink to="/login"><button>Log-in</button></NavLink>
      </>
    );
  }

  return(
    <div className={styles.AuthMenu}>
      {renderContent()}
    </div>
  );
}

export default AuthMenu;
