import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthMenu from '../../AuthArea/AuthMenu/AuthMenu';
import styles from './header.module.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {

  const navigate = useNavigate();
  const nav = () => {
    navigate('/home');
  }

  return(
    <header className={styles.Header}>
      <AuthMenu />
      <h1 onClick={nav}>Timmy's Shoes</h1>
  
      <div className={styles.Header__search}>
      <button className={styles.Header__search__btn}>search</button>
      <input type="search" placeholder='Search Something...'/>
      </div>
    </header>
  );
}

export default Header;
