import React, { FC } from 'react';
import styles from './aside.module.scss';
import {NavLink} from 'react-router-dom';

interface AsideProps {}

const Aside: FC<AsideProps> = () => (
  <aside className={`Box ${styles.Aside}`}>
          <h3 className={`Box ${styles.Aside}`}>תפריט</h3>
    <nav>
      <NavLink className={`Box ${styles.Aside}`} to='/home'>דף הבית</NavLink>
      <NavLink className={`Box ${styles.Aside}`} to='/products'>מוצרים</NavLink>
      <NavLink className={`Box ${styles.Aside}`} to='/about'>מי אנחנו</NavLink>
      <NavLink className={`Box ${styles.Aside}`} to='/successStories'>סיפורי הצלחה</NavLink>
      <NavLink className={`Box ${styles.Aside}`} to='/employees'>עובדי החנות</NavLink>
    </nav>
  </aside>
);

export default Aside;
