import React, { FC,useState,useEffect } from 'react';
import Employee from '../../../models/Employee';
import { getEmployees } from '../../../Utils/fetch';
import Loader from '../../Loader/Loader';
import Employees from './Employees/Employees';
import styles from './EmployeesArea.module.scss';

interface EmployeesAreaProps {}

const EmployeesArea: FC<EmployeesAreaProps> = () => {

  const [employees,setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    setIsLoading(true);
    getEmployees().then((employees) => {
      setEmployees(employees);
    }).catch((err) => {
      console.log(err.message);
    }).finally(() => {
      setIsLoading(false);
    })
  },[])

  if(isLoading) return <Loader />
  return(
    <div className={styles.ProductsArea}>
      <Employees employees={employees}/>
    </div>
  );
}

export default EmployeesArea;
