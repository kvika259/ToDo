import {useSelector} from 'react-redux'

import Task from "../Task"
import Filter from "../FilterTask"
import DeleteAllCompletedTasks from '../DeleteAllCompletedTasks'


const List = () => {
      
    const {tasks, loading} = useSelector((store) => store.tasks)
    
    console.log(tasks)
    return <div>
        <Filter/>     
        <p>Список задач:</p>
        {loading && <div>Загрузка</div>}
        {tasks.length === 0 && <div>Задач нет, добавьте первую</div>}
        <ol>{tasks && tasks.map((i)=><li key={i.id}><Task i ={i}/></li>)}
        </ol>
        <DeleteAllCompletedTasks/>
    </div>
}

export default List

