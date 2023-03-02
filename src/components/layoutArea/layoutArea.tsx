import React, { FC } from 'react';
import styles from './layoutArea.module.scss';

interface LayoutAreaProps {}

const LayoutArea: FC<LayoutAreaProps> = () => (
  <div className={styles.LayoutArea}>
    <header>Header</header>
    <aside>Aside</aside>
    <main>Main</main>
    <footer>Footer</footer>
  </div>
);

export default LayoutArea;
