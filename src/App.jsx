import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router'

import './App.css'
import Register from './pages/register/register.jsx'
import Login from './pages/login/login.jsx'
import MyTask from './pages/myTask/myTask.jsx'
import PrivateRoute from './components/PrivateRoute/index.jsx'

function App() {

  return <>
       
    <Routes>
      <Route index element={<div>
        <NavLink to="/registration">Регистрация</NavLink>
        <NavLink to="/login">Логин</NavLink>
      </div>}></Route>
      <Route path={'/registration'} element={<Register/>}></Route>
      <Route path={'/login'} element={<Login/>} ></Route>
      <Route element={<PrivateRoute/>}>
        <Route path={'/MyTask'} element={<MyTask/>}></Route>
      </Route>
    </Routes>
     
  </>
}

export default App
