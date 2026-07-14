import { NavLink } from "react-router";

const StartPage = () => {
  return (
    <div>
      <NavLink to="/registration">Регистрация</NavLink>
      <NavLink to="/login">Логин</NavLink>
    </div>
  );
};

export default StartPage;
