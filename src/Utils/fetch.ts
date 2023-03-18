import axios from "axios";
import Employee from "../models/Employee";

export const BASE_API_URL = 'http://localhost:3030/api/employees';

export const getEmployees = async (): Promise<Employee[]> => {
      //ajax
      const response = await axios.get<Employee[]>(BASE_API_URL);
      console.log(response);
   
      const employees = response.data;
   
      return new Promise((resolve,reject)=> {
      setTimeout(() => {
            resolve(employees);
         }, 3000);
         });   
   }

   export const getEmployee = async (id:number): Promise<Employee> => {
      //ajax
      const response = await axios.get<Employee>(`${BASE_API_URL}/${id}`);

   
      const employee = response.data;
   
      return new Promise((resolve,reject)=> {
      setTimeout(() => {
            resolve(employee);
         }, 2000);
         });   
   }