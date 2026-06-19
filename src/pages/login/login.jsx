import { useState } from "react"
import { Navigate, useNavigate } from 'react-router';
import { login } from "../../api/api";


const Login = () => {
    const [user, setUser] = useState({email: '', password: ''})

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }  
    
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <h2>Войти</h2>
                email <input value={user.email} name="email" onChange={handleChange} />
                password <input value={user.password} name="password" onChange={handleChange} />
                <button onClick={()=>login(user, navigate)}>Войти</button>
            </div>
        </div>
    )
}

export default Login