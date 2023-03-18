import React, { FC } from 'react';
import styles from './Employees.module.scss';
import Employee from '../../../../models/Employee';
import EmployeeItem from './EmployeeItem/EmployeeItem';

interface EmployeesProps {
  employees: Employee[];
}

const Employees: FC<EmployeesProps> = ({employees}) => {
  
  const renderEmployees = () => {
    return employees.map((employee) =>{
       const {id,firstName,lastName,title,country,city} = employee;
       return <EmployeeItem key={id} employee={employee}/>
    })
  }

  return (
    <div className={styles.Employees}>
      {renderEmployees()}
    </div>
  );
}

export default Employees;
