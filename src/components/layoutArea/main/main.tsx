import React, { FC } from 'react';
import Router from '../../Router/Router';
import styles from './main.module.scss';

interface MainProps {}

const Main: FC<MainProps> = () => (
  <main className={`Box ${styles.Main}`}>
  <Router />
  </main>
)

export default Main;
