import { useState } from "react";
import { useDispatch } from "react-redux";

import { createTask } from "../../api/todo";

const CreateTask = () => {
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  const dispatch = useDispatch();

  const handleChange = e => {
    setNewTask(newTask => ({ ...newTask, [e.target.name]: e.target.value }));
  };

  const handleClick = () => {
    dispatch(createTask(newTask));
    setNewTask({ title: "", description: "" }); // обнуление строки ввода новой задачи после добавления
  };

  return (
    <div>
      <input value={newTask.title} name="title" onChange={handleChange} />
      <input
        value={newTask.description}
        name="description"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Добавить</button>
    </div>
  );
};

export default CreateTask;
