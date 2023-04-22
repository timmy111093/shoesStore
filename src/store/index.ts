import {configureStore} from '@reduxjs/toolkit';
import employeesReducer from '../../src/components/layoutArea/EmployeesArea/employeesSlice';
import authSlice from '../auth/authSlice';

const store = configureStore({
      reducer:{
            employeesState: employeesReducer,
            authState: authSlice
      }
});

// infer the "RootState" and "AppDispatch"
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;
