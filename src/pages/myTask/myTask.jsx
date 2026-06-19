import { useState, useEffect } from "react";

import List from "../../components/List";
import CreateTask from "../../components/CreateTask";
import LogOut from "../../components/LogOut";
import { fetchTodo } from "../../api/api";



const MyTask = () => {

    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    

    useEffect (()=>{fetchTodo(setIsLoading, setTasks)},[])
    
    return <>
    <LogOut/>
    <CreateTask setTasks={setTasks}/>
    <List tasks ={tasks} setTasks={setTasks} isLoading={isLoading}/>
    </>
}

export default MyTask