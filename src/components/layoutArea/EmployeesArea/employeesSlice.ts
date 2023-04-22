import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import Employee from '../../../models/Employee';

interface EmployeeState{
      employees: Employee[],
      employee?: Employee
}

const initialState:EmployeeState = {
      employees:[]
}

export const employeeSlice = createSlice({
      name: 'employees',
      initialState: initialState,
      reducers: {
            setEmployees: (state,action:PayloadAction<Employee[]>) => {
                  // redux toolkit allows us to write mutating logic in the reducers
                  state.employees = action.payload;
            },
            setEmployee:(state,action:PayloadAction<Employee>) => {
                  const {payload} = action;
                  state.employee = payload;
            },

            addingEmployee:(state,{payload:employee}:PayloadAction<Employee>) => {
                  state.employees.push(employee);
            },
            updatingEmployee:(state,{payload:employee}:PayloadAction<Employee>) => {
                  const indexToUpdate = state.employees.findIndex((e) => e.id === employee.id);
                  if(indexToUpdate >= 0){
                        state.employees[indexToUpdate] = employee;
                  }
                  state.employee = employee;
            },
            removeEmployee: (state,{payload:id}:PayloadAction<number>) => {
                  const indexToDelete = state.employees.findIndex((e) => e.id === id);
                  if(indexToDelete >= 0){
                        state.employees.splice(indexToDelete,1);
                  }
            }
      }
});

export const { setEmployees,setEmployee,addingEmployee,updatingEmployee,removeEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
