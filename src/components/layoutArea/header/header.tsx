import React, { FC } from 'react';
import styles from './header.module.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <header className={`Box ${styles.Header}`}>
    <h1>חנות הנעליים שלי!</h1>
  </header>
);

export default Header;
