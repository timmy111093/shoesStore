import axios from "axios";
import Employee from "../models/Employee";

export const BASE_API_URL = 'http://localhost:3030/api/employees';

export const getEmployees = async (): Promise<Employee[]> => {
      //ajax
      const response = await axios.get<Employee[]>(BASE_API_URL);
   
      const employees = response.data;
   
      return new Promise((resolve,reject)=> {
      setTimeout(() => {
            resolve(employees);
         }, 1000);
         });   
   }

   export const getEmployee = async (id:number): Promise<Employee> => {
      //ajax
      const response = await axios.get<Employee>(`${BASE_API_URL}/${id}`);
   
      const employee = response.data;
   
      return new Promise((resolve,reject)=> {
      setTimeout(() => {
            resolve(employee);
         }, 1000);
         });   
   }

   export const addEmployee = async (employee:Employee):Promise<Employee> => {

      // AJAX request - send a new product to the server / recieving back the added product
   
      const formData = new FormData(); // containing strings / files
   
      formData.append('firstName', employee.firstName);
      formData.append('lastName', employee.lastName);
      formData.append('title', employee.title);
      formData.append('city', employee.city);
      formData.append('country', employee.country);
      formData.append('birthDate', employee.birthDate);
      formData.append('image', employee.imageName[0]); // image = FileList image[0] = File / Blob
      
      const response = await axios.post(`${BASE_API_URL}/`,formData);
      const addedEmployee = response.data;
   
      return new Promise((resolve,reject) => {
         setTimeout(() => {
           resolve(addedEmployee);
         },1000)
      });
   }

   export const deleteEmployee = async (id:number):Promise<boolean> => {

      await axios.delete(`${BASE_API_URL}/${id}`);
   
      return new Promise((resolve,reject) => {
         setTimeout(() => {
           resolve(true);
           reject(false);
         },1000)
      });
   }

   export const updateEmployee = async (employee:Employee) :Promise<Employee> => {

      // AJAX request - send a new employee to the server / recieving back the updated employee
   
      const formData = new FormData(); // containing strings / files

      formData.append('firstName', employee.firstName);
      formData.append('lastName', employee.lastName);
      formData.append('title', employee.title);
      formData.append('city', employee.city);
      formData.append('country', employee.country);
      formData.append('birthDate', employee.birthDate);
      formData.append('image', employee.imageName[0]); // image = FileList image[0] = File / Blob
      
      const response = await axios.put(`${BASE_API_URL}/${employee.id}`,formData);
      const updatedEmployee = response.data;
   
      return new Promise((resolve,reject) => {
         setTimeout(() => {
            
           resolve(updatedEmployee);
           
         },1000)
      });
   }