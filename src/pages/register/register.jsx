import { useState } from "react"
import { Navigate, useNavigate } from 'react-router';

import { registr } from "../../api/auth";

const Register = () => {
    const [user, setUser] = useState({email: '', password: '', name: ''})

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const navigate = useNavigate()
    

    return (
        <div>
            <h2>Зарегистрироваться</h2>
            <div>
                email <input value={user.email} name="email" onChange={handleChange} />
                password <input value={user.password} name="password" onChange={handleChange} />
                name <input value={user.name} name="name" onChange={handleChange} />
                <button onClick={()=>registr(user, navigate)}>Зарегистрироваться</button>
            </div>
        </div>
    )
}

export default Register