import { useState } from "react"
import { deleteT } from "../../api/todo"

const DeleteTask =({setTasks,id}) =>{
    
    return <button onClick={()=>deleteT(setTasks,id)}>🗑</button>
}

export default DeleteTask
