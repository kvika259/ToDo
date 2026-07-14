import { deleteTask } from "../../api/todo";
import { useDispatch } from "react-redux";

const DeleteTask = ({ id }) => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(deleteTask(id))}>🗑</button>;
};

export default DeleteTask;
