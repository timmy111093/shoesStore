import React, { FC } from 'react';
import styles from './aside.module.scss';

interface AsideProps {}

const Aside: FC<AsideProps> = () => (
  <aside className={styles.Aside}>
    Aside Component
  </aside>
);

export default Aside;
