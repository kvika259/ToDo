import { useState } from "react"
import { deleteT } from "../../api/api"

const DeleteTask =({setTasks,id}) =>{
    
    return <button onClick={()=>deleteT(setTasks,id)}>🗑</button>
}

export default DeleteTask
