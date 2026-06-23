import { useState } from "react"
import { Navigate, useNavigate, NavLink } from 'react-router';

import { registr } from "../../api/auth";

const Register = () => {
    const [user, setUser] = useState({email: '', password: '', name: ''})

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
            e.preventDefault(); // Это предотвратит перезагрузку страницы, которая происходит до того, как код дошел до login
            registr(user, navigate);
            };
    
    const navigate = useNavigate()
    

    return (
        <div>
            <NavLink to="/login">Войти</NavLink>
            <h2>Зарегистрироваться</h2>
            <form onSubmit={handleSubmit}>
                <label for="post-email">
                    email
                    <input value={user.email} id="post-email" type="text" name="email" onChange={handleChange}/>
                </label>
                <label for="post-password">
                    password
                    <input value={user.password} id="post-password" type="text" name="password" onChange={handleChange}/>
                </label>
                <label for="post-name">
                    name
                    <input value={user.name} id="post-name" type="text" name="name" onChange={handleChange}/>
                </label>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Register