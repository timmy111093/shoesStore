import React, { FC } from 'react';
import styles from './AddEmployee.module.scss';
import {useForm} from 'react-hook-form';
import {useAppDispatch} from '../../../../../../hooks';
import Employee from '../../../../../../models/Employee';
import { addEmployee } from '../../../../../../Utils/fetch';
import {NavLink,useNavigate} from 'react-router-dom';
import validation from './validation';
import FormErrors from '../../../../../FormErrors/FormErrors';
import Modal from '../../../../../Modal/Modal';
import { addingEmployee } from '../../../employeesSlice';

interface AddEmployeeProps {
  onClose: () => void;

}

const AddEmployee: FC<AddEmployeeProps> = ({onClose}) => {

  const {register,handleSubmit, formState} = useForm<Employee>();
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const submitEmpHandler = (employee:Employee) => {
     addEmployee(employee).then((_employee) => {

      dispatch(addingEmployee(_employee));
      // onAddEmployee(_employee);
      onClose();

    }).catch((err) => console.log(err))
  }

  return(

    <Modal onClose={onClose}>
          <div className={styles.AddEmployee}>
      <form onSubmit={handleSubmit(submitEmpHandler)} className='form-group'>
        <h2>הוסף עובד חדש</h2>
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

        <button>הוסף</button>
        <button onClick={onClose}>סגור</button>
      </form>
    </div>
    </Modal>
  );
}

export default AddEmployee;
