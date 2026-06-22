import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router'

import './App.css'
import Register from './pages/register/register.jsx'
import Login from './pages/login/login.jsx'
import MyTask from './pages/myTask/myTask.jsx'
import PrivateRoute from './components/PrivateRoute/index.jsx'
import StartPage from './pages/startPage/startPage.jsx'
import NotFound from './pages/notFound/NotFound.jsx'

function App() {

  return <>
       
    <Routes>
      <Route index element={<StartPage/>}/>
      <Route path={'/registration'} element={<Register/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path={'/MyTask'} element={<MyTask/>}/>
      </Route>
      <Route path={'*'} element={<NotFound/>}/>
    </Routes>
     
  </>
}

export default App
