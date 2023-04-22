import React, { FC,useState,useEffect } from 'react';
import {useAppDispatch,useAppSelector} from '../../../hooks';
import { setEmployees } from './employeesSlice';
import Employee from '../../../models/Employee';
import { getEmployees } from '../../../Utils/fetch';
import Loader from '../../Loader/Loader';
import Employees from './Employees/Employees';
import styles from './EmployeesArea.module.scss';

interface EmployeesAreaProps {
}

const EmployeesArea: FC<EmployeesAreaProps> = () => {

  const {employees} = useAppSelector((state) => state.employeesState);
  const dispatch = useAppDispatch();
  // const [employees,setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    setIsLoading(true);
    getEmployees().then((employees) => {
      dispatch(setEmployees(employees));
    }).catch((err) => {
      console.log(err.message);
    }).finally(() => {
      setIsLoading(false);
    })
  },[])

  if(isLoading) return <Loader />
  return(
    <div className={styles.EmployeesArea}>
      <Employees employees={employees}/>
    </div>
  );
}

export default EmployeesArea;
