import {useDispatch} from 'react-redux'

import DeleteTask from "../DeleteTask"
import UpdateTask from "../UpdateTask"
import { completedTask } from "../../api/todo"


const Task = ({i}) => {
    const dispatch = useDispatch()

    return <div>
        <button onClick={()=>dispatch(completedTask(i.id))}>{i.completed? '✅':'o'}</button>
            <span style={{ "textDecoration": i.completed ? 'line-through' : 'none'}}>{i.title} - {i.description}</span> 
            <DeleteTask id={i.id}/>
            <UpdateTask id={i.id}/>
    </div>   
            
}

export default Task
