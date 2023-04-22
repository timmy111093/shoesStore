import React, { FC, useState } from 'react';
import styles from './Employees.module.scss';
import Employee from '../../../../models/Employee';
import EmployeeItem from './EmployeeItem/EmployeeItem';
import {NavLink} from 'react-router-dom';
import AddEmployee from './EmployeeDetails/AddEmployee/AddEmployee';
import { useAppSelector } from '../../../../hooks';

interface EmployeesProps {
  employees: Employee[];

}

const Employees: FC<EmployeesProps> = ({employees}) => {

  const [showAddedEmployee,setShowAddedEmployee] = useState(false);
  const {user} = useAppSelector((state) => state.authState);

  const modalHandler = () => {
    setShowAddedEmployee((prevState) => !prevState);
 }
  
  const renderEmployees = () => {
    return employees.map((employee) =>{
       const {id} = employee;
       return <EmployeeItem key={id} employee={employee}/>
    })
  }

  return (
    <div className={styles.Employees}>
      {user && <NavLink onClick={modalHandler} to='#'>הוסף עובד</NavLink>}
      {renderEmployees()}
      {showAddedEmployee && <AddEmployee onClose={modalHandler}/>}

    </div>
  );
}

export default Employees;
