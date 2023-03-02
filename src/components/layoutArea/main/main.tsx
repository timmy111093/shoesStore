import React, { FC } from 'react';
import styles from './main.module.scss';

interface MainProps {}

const Main: FC<MainProps> = () => (
  <main className={styles.Main}>
    Main Component
  </main>
);

export default Main;
