import { useEffect, useState } from "react"
import Task from "../Task"
import Filter from "../FilterTask"


const List = ({tasks, setTasks, isLoading}) => {
      

    if(isLoading){return <div>Загрузка</div>}
    return <div>
        <Filter setTasks={setTasks}/>     
        <p>Список задач:</p>
        <ol>{tasks && tasks.map((i)=><li key={i.id}><Task i ={i} setTasks={setTasks}/></li>)}
        </ol>
    </div>
}

export default List

