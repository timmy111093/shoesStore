import React, { FC, useEffect } from 'react';
import styles from './EditEmployee.module.scss';
import {useForm} from 'react-hook-form';
import Employee from '../../../../../models/Employee';
import { updateEmployee } from '../../../../../Utils/fetch';
import {updatingEmployee} from '../../employeesSlice';
import { useAppDispatch } from '../../../../../hooks';
// import {NavLink,useNavigate} from 'react-router-dom';
import validation from './validation';
import FormErrors from '../../../../FormErrors/FormErrors';
import Modal from '../../../../Modal/Modal';

interface EditEmployeeProps {
  onClose: () => void;
  employee: Employee;
}

const EditEmployee: FC<EditEmployeeProps> = ({onClose,employee}) => {

  const {register, handleSubmit, formState, setValue} = useForm<Employee>();
  const dispatch = useAppDispatch();

  const submitEmpHandler = (employee:Employee) => {
    
     updateEmployee(employee).then((_employee) => {

      dispatch(updatingEmployee(_employee));
      // onEditEmployee(_employee);
      onClose();

    }).catch((err) => console.log(err))
  }
  useEffect(() => {
    setValue('id', employee.id);
    setValue('firstName',employee.firstName);
    setValue('lastName',employee.lastName);
    setValue('title',employee.title);
    setValue('city',employee.city);
    setValue('country',employee.country);
    setValue('birthDate',employee.birthDate);
  },[]);

  return(

    <Modal onClose={onClose}>
      
          <div className={styles.EditEmployee}>
          <span className='closing' onClick={onClose}>X</span><br />

      <form onSubmit={handleSubmit(submitEmpHandler)} className='form-group'>
        <input type="hidden" value={employee.id} />
        <FormErrors error={formState.errors.firstName?.message}>
        <label>שם פרטי:</label><br />
        <input className='form-control' type="text" {...register('firstName',validation.firstName)} />
        </FormErrors>
        <FormErrors error={formState.errors.lastName?.message}>
        <label>שם משפחה:</label><br />
        <input className='form-control' type="text" {...register('lastName',validation.lastName)} />
        </FormErrors>
        <FormErrors error={formState.errors.title?.message}>
        <label>תפקיד:</label><br />
        <input className='form-control' type="text" {...register('title',validation.title)} />
        </FormErrors>
        <FormErrors error={formState.errors.city?.message}>
        <label>עיר מגורים:</label><br />
        <input className='form-control' type="text" {...register('city',validation.city)} />
        </FormErrors>
        <FormErrors error={formState.errors.country?.message}>
        <label>מדינה:</label><br />
        <input className='form-control' type="text" {...register('country',validation.country)} />
        </FormErrors>

        <label>תאריך לידה</label><br />
        <input className='form-control' type="date" {...register('birthDate')} />

        <label>תמונה:</label>
        <input  className='form-control' type="file" accept='image/*' {...register('imageName')} /><br />

        <button>שמירה</button>
      </form>
    </div>
    </Modal>
  );
}

export default EditEmployee;
