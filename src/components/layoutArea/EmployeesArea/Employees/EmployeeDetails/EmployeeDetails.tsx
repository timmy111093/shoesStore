import React, { FC,useState,useEffect } from 'react';
import styles from './EmployeeDetails.module.scss';
import {getEmployee, deleteEmployee} from '../../../../../Utils/fetch';
import {useAppDispatch,useAppSelector} from '../../../../../hooks';
import Employee from '../../../../../models/Employee';
import {useParams , useNavigate} from 'react-router-dom';
import {BASE_API_URL} from '../../../../../Utils/fetch';
import Loader from '../../../../Loader/Loader';
import {NavLink} from 'react-router-dom';
import EditEmployee from '../EditEmployee/EditEmployee';
import { removeEmployee, setEmployee } from '../../employeesSlice';


interface EmployeeDetailsProps {}

const EmployeeDetails: FC<EmployeeDetailsProps> = () => {

  const [showEditEmployee,setShowEditEmployee] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {authState,employeesState} = useAppSelector((state) => state);
  const {user} = authState;
  const {employee,employees} = employeesState;
  const [loading,setLoading] = useState(true);

  const editModalHandler = () => {
    setShowEditEmployee((prevState) => !prevState);
 }

  const deletedEmployee = async () => {
    if(params.empId){
      setLoading(true);
      try{
        const success = await deleteEmployee(+params.empId);
        if(success) {
          alert('employee was deleted successfully!');
          dispatch(removeEmployee(+params.empId));
          navigate('/employees');
        }
      }catch(err){
        console.log(err);
        setLoading(false);
      }
    }
  }

  const renderOptions = () => {
    if(user){
      return(
        <>
        <NavLink onClick={editModalHandler} to='#'><button>Edit</button></NavLink>
        <NavLink onClick={deletedEmployee} to='#'><button>Delete</button></NavLink>
        </>
      )
    }
  }

  useEffect(() => {

    if(params.empId){
      const id = +params.empId;
      const employee = employees.find((e) => e.id === id);
      if(employee){
        dispatch(setEmployee(employee));
        setLoading(false);
      }else{
        getEmployee(+params.empId).then((employee) => {
          // setEmployee(employee);
          dispatch(setEmployee(employee));
        }).catch((err) => {
          console.log(err.message);
        }).finally(() => {
          setLoading(false)
        });
      }
    }  

  },[])

  const renderEmployee = () => {

    if(employee) {
      const imgSrc = `${BASE_API_URL}/images/${employee.imageName}`;
      return(
          <div className={`Box ${styles.EmployeeDetails__content}`}>
          <h4>כרטיס עובד</h4><hr />
          <header className={styles.EmployeeItem__empHeader}>
          <b>מס' עובד:</b> {employee.id}
      </header>
            <div><b>שם מלא: </b> {employee.firstName} {employee.lastName}</div>
            <div><b>תפקיד: </b> {employee.title}</div>
            <div><b>מגורים: </b> {employee.city}, {employee.country}</div>
            <div><b> תאריך לידה:</b> {employee.birthDate}</div><br />
            <div className={styles.EmployeeDetails__img}>
            <img src={imgSrc}  style={{width:'100%'}}/>
          </div>
          <div className={styles.EmployeeItem__options}>
            {renderOptions()}
            <NavLink to='/employees'><button>Back</button></NavLink>
          </div>
          </div>
      )
    }
    
  }

  if(loading) return <Loader />

  return(
    <div className={styles.EmployeeDetails__card}>
      {renderEmployee()}
      {(showEditEmployee && employee) && <EditEmployee onClose={editModalHandler} employee={employee}/>}
    </div>

  );
}

export default EmployeeDetails;
