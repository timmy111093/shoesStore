import React, { FC } from 'react';
import styles from './EmployeeItem.module.scss';
import Employee from '../../../../../models/Employee';
import {NavLink} from 'react-router-dom';
import { BASE_API_URL } from '../../../../../Utils/fetch';

interface EmployeeItemProps {
  employee: Employee;
}

const EmployeeItem: FC<EmployeeItemProps> = ({employee}) => {

  const {firstName,lastName,id,title,city,country,imageName,birthDate} = employee;
  const imgSrc = `${BASE_API_URL}/images/${imageName}`;

  return(

    <div className={`Box ${styles.EmployeeItem__empCard}`}>
      
      <header className={styles.EmployeeItem__empHeader}>
        מס' עובד: {id}
      </header>
      <div className={styles.EmployeeItem__empBody}>
        <span><b>שם מלא:</b> {firstName} {lastName}</span> <br />
        <span><b> תפקיד:</b> {title}</span><br />
        <span> <b>מגורים:</b> {country} | {city}</span><br />
        <span><b> תאריך לידה:</b> {birthDate}</span><br />
      </div>
      <div className={styles.ProductItem__link}>
            <NavLink to={`/images/${id}`}>
              <img src={imgSrc} alt={firstName} />
            </NavLink>
          </div>
    </div>
    
    );
}

export default EmployeeItem;