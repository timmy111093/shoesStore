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


interface RouterProps {}

const Router: FC<RouterProps> = () => (

  <Routes>
    <Route path='/home' element={<Home />}/>
    <Route path='/successStories' element={<SuccessStories/>}/>
    <Route path='/about' element={<About />}/>
    <Route path='/products' element={<Products />}/>
    <Route path='/employees' element={<EmployeesArea />}/>
    <Route path='/images/:prodId' element={<EmployeeDetails />}/>

    {/* default route */}
    <Route path='/' element={<Navigate to="/home"/>}/>

    {/* error route */}
    <Route path='*' element={<PageNotFound />}/>
  </Routes>
);

export default Router;
