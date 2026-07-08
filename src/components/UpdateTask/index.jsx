import {useDispatch, useSelector} from 'react-redux'

import { updatingTask } from "../../api/todo"
import { useState } from 'react'


const UpdateTask = ({id}) => {
    const dispatch = useDispatch()
    const tasks = useSelector((store) => store.tasks.tasks)
    const [{title, description}] = tasks.filter(i=> i.id == id)

    const [isUpdating, setIsUpdating] = useState(false)
    const [updateTask, setUpdateTask] = useState({title: `${title}`, description:`${description}`})  

    const handleChange = (e) => {
        setUpdateTask((updateTask)=>({...updateTask, [e.target.name]: e.target.value}))
    }

    const handleClick = () => {
           if(isUpdating) {dispatch(updatingTask({id: id, task: updateTask}))}
           setIsUpdating(!isUpdating)
        }
    
    return <>
        <button onClick={handleClick}>{isUpdating? "Изменить" : "✏️"}</button>
        {isUpdating && <div>
            <input value={updateTask.title} name="title" onChange={handleChange} />
            <input value={updateTask.description} name="description" onChange={handleChange} />
        </div>}
    </>   
            
}

export default UpdateTask