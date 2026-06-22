import { useState } from "react"
import { create } from "../../api/todo"

const CreateTask =({setTasks}) =>{
    const [newTask, setNewTask] = useState({title:"", description:''})   

    const handleChange = (e) => {
        setNewTask((newTask)=>({...newTask, [e.target.name]: e.target.value}))
    }

    return <div>
            <input value={newTask.title} name="title" onChange={handleChange} />
            <input value={newTask.description} name="description" onChange={handleChange} />
            <button onClick={()=>create(setTasks, setNewTask, newTask)}>Добавить</button>
    </div>
}

export default CreateTask