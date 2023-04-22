import React, { FC, ReactNode } from 'react';
import styles from './footer.module.scss';
import { useAppDispatch,useAppSelector } from '../../../hooks';
import store from '../../../store';

interface FooterProps {}

const getName = () => {
  const num = store.getState().employeesState.employees.length;
  alert('מספר עובדים:' + " " + num);
}

const Footer: FC<FooterProps> = () => {
  const {employees} = useAppSelector((state) => state.employeesState);

  const date = new Date();
  const currentYear = date.getFullYear();
  return(
    
    <footer onClick={getName} className={styles.Footer}>

    כל הזכויות שמורות &copy; תמיר אלמקייס {currentYear}
    {employees && <span>  |  מספר העובדים:  {employees.length}</span>}
    </footer>
  );
}

export default Footer;
