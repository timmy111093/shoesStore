import React, { FC } from 'react';
import styles from './SuccessStories.module.scss';

interface SuccessStoriesProps {}

const SuccessStories: FC<SuccessStoriesProps> = () => (
  <div className={styles.SuccessStories}>
    <h3>כאן תוכלו לקרוא על לקוחות מרוצים...</h3>
  </div>
);

export default SuccessStories;
