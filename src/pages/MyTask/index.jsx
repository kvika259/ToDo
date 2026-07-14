import { useEffect } from "react";
import { useDispatch } from "react-redux";

import List from "../../components/List";
import CreateTask from "../../components/CreateTask";
import LogOut from "../../components/LogOut";
import { getTasks } from "../../api/todo";

const MyTask = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <>
      <LogOut />
      <CreateTask />
      <List />
    </>
  );
};

export default MyTask;
