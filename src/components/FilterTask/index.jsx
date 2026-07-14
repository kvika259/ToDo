import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { filterTasks } from "../../api/todo";

const Filter = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("");

  const handleFilterChange = e => {
    setFilter(e.target.value); // Записываем выбранное значение в filter
  };

  useEffect(() => {
    dispatch(filterTasks(filter));
  }, [filter]);

  return (
    <div>
      <input
        type="radio"
        id="choice1"
        name="completed"
        value=""
        checked={filter === ""}
        onChange={handleFilterChange}
      />
      <label htmlFor="сhoice1">Все</label>

      <input
        type="radio"
        id="choice2"
        name="completed"
        value="true"
        onChange={handleFilterChange}
      />
      <label htmlFor="choice2">Выполненные</label>

      <input
        type="radio"
        id="choice3"
        name="completed"
        value="false"
        onChange={handleFilterChange}
      />
      <label htmlFor="choice3">Невыполненные</label>
    </div>
  );
};

export default Filter;
