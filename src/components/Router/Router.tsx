import React, { FC } from 'react';
import styles from './Router.module.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../layoutArea/HomeArea/Home/Home';
import About from '../layoutArea/About/About';
import Products from '../layoutArea/Products/Products';
import PageNotFound from '../layoutArea/Page_not_found/Page_not_found';
import SuccessStories from '../layoutArea/SuccessStories/SuccessStories';
import EmployeesArea from '../layoutArea/EmployeesArea/EmployeesArea';
import Employees from '../layoutArea/EmployeesArea/Employees/Employees';
import EmployeeItem from '../layoutArea/EmployeesArea/Employees/EmployeeItem/EmployeeItem';
import EmployeeDetails from '../layoutArea/EmployeesArea/Employees/EmployeeDetails/EmployeeDetails';
import AddEmployee from '../layoutArea/EmployeesArea/Employees/EmployeeDetails/AddEmployee/AddEmployee';
import Employee from '../../models/Employee';
import EditEmployee from '../layoutArea/EmployeesArea/Employees/EditEmployee/EditEmployee';
import Register from '../AuthArea/Register/Register';
import Login from '../AuthArea/Login/Login';

interface RouterProps {
}

const Router: FC<RouterProps> = () => (

  <Routes>
    <Route path='/home' element={<Home />}/>
    <Route path='/successStories' element={<SuccessStories/>}/>
    <Route path='/about' element={<About />}/>
    <Route path='/products' element={<Products />}/>
    <Route path='/employees' element={<EmployeesArea />}/>
    <Route path='/images/:empId' element={<EmployeeDetails />}/>

    {/* <Route path='/employees/new' element={<AddEmployee onAddEmployee={()=>{}}/>}></Route>*/}
    {/* <Route path='/employees/edit' element={<EditEmployee onAddEmployee={()=>{}} />}></Route>  */}

    {/* default route */}
    <Route path='/' element={<Navigate to="/home"/>}/>

    {/* error route */}
    <Route path='*' element={<PageNotFound />}/>

    {/* register route */}
    <Route path='/register' element={<Register />}/>
    
    {/* login route */}
    <Route path='/login' element={<Login />}/>

  </Routes>
);

export default Router;
