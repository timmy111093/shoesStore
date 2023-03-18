import React, { FC,useState,useEffect } from 'react';
import styles from './EmployeeDetails.module.scss';
import {getEmployee} from '../../../../../Utils/fetch';
import Employee from '../../../../../models/Employee';
import {useParams} from 'react-router-dom';
import {BASE_API_URL} from '../../../../../Utils/fetch';
import Loader from '../../../../Loader/Loader';

interface EmployeeDetailsProps {}

const EmployeeDetails: FC<EmployeeDetailsProps> = () => {

  const params = useParams();
  const [employee,setEmployee] = useState<Employee>();
  const [loading,setLoading] = useState(true);


  useEffect(() => {

    if(params.prodId){

      getEmployee(+params.prodId).then((employee) => {
        setEmployee(employee);
      }).catch((err) => {
        console.log(err.message);
      }).finally(() => {
        setLoading(false)
      });
    }  

  },[])

  const renderEmployee = () => {

    if(employee) {
      const imgSrc = `${BASE_API_URL}/images/${employee.imageName}`;
      return(
        <div>
          <div className={`Box ${styles.EmployeeDetails__content}`} style={{width:'50%'}}>
          <h2>כרטיס עובד</h2>
            <p>שם מלא: {employee.firstName} {employee.lastName}</p>
            <p>תפקיד: {employee.title}</p>
            <p>מגורים: {employee.city} | {employee.country}</p>
            <div className={styles.EmployeeDetails}>
            <img src={imgSrc}  style={{width:'100%'}}/>
          </div>
          </div>

        </div>
      )
    }
    
  }

  if(loading) return <Loader />

  return(
    <div className='empCard' style={{width:500}}>
      {renderEmployee()}
    </div>

  );
}

export default EmployeeDetails;
