import { deleteTask } from "../../api/todo";
import { useDispatch, useSelector } from "react-redux";

const DeleteAllCompletedTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(store => store.tasks.tasks);
  const idComplitedTasks = tasks.filter(i => i.completed).map(i => i.id);

  const handleClick = () => {
    idComplitedTasks.forEach(i => dispatch(deleteTask(i)));
  };

  return <button onClick={handleClick}>Удалить все завершённые</button>;
};

export default DeleteAllCompletedTasks;
