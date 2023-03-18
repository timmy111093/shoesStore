import React, { FC, ReactNode,useEffect } from 'react';
import styles from './Change_title.module.scss';

interface ChangeTitleProps {}

const ChangeTitle: FC<ChangeTitleProps> = () => {

  useEffect(() => {
    const randTitle = Math.floor(Math.random() * 101);
    document.title = `Page ${randTitle}`;
  },[]);

  return (
    <div className={styles.ChangeTitle}>
    </div>
  );
}





export default ChangeTitle;
