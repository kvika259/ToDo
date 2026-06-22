import DeleteTask from "../DeleteTask"
import { isCompleted } from "../../api/todo"


const Task = ({i, setTasks}) => {
      

    return <div>
        <button onClick={()=>isCompleted(i.id, setTasks)}>{i.completed? '✅':'o'}</button>
            <span style={{ "textDecoration": i.completed ? 'line-through' : 'none'}}>{i.title}</span> 
            <DeleteTask id={i.id} setTasks={setTasks}/>
    </div>   
            
}

export default Task
