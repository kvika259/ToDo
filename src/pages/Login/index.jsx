import { useState } from "react";
import { useNavigate, NavLink } from "react-router";
import { login } from "../../api/auth";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault(); // Это предотвратит перезагрузку страницы, которая происходит до того, как код дошел до login
    login(user, navigate);
  };

  const navigate = useNavigate();

  return (
    <div>
      <NavLink to="/registration">Зарегистрироваться</NavLink>
      <h2>Войти</h2>
      <form onSubmit={handleSubmit}>
        <label for="post-email">
          email
          <input
            value={user.email}
            id="post-email"
            type="text"
            name="email"
            onChange={handleChange}
          />
        </label>
        <label for="post-password">
          password
          <input
            value={user.password}
            id="post-password"
            type="text"
            name="password"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
