import { useState } from "react"
import { Navigate, useNavigate } from 'react-router';

const Register = () => {
    const [user, setUser] = useState({email: '', password: '', name: ''})

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const navigate = useNavigate()
    const func = async () => {
        try {
                const response = await fetch("https://todo-redev.onrender.com/api/auth/register", {
                    method: 'POST',
                    headers:
                    {
                        accept: 'application/json',
                        "Content-Type": 'application/json'
                    },
                body:JSON.stringify(user)
            })
            const userInfo = await response.json()
            localStorage.setItem('token',userInfo.access_token)
            navigate("/MyTask")
        }catch (error) {}

    }

    return (
        <div>
            <h2>Зарегистрироваться</h2>
            <div>
                email <input value={user.email} name="email" onChange={handleChange} />
                password <input value={user.password} name="password" onChange={handleChange} />
                name <input value={user.name} name="name" onChange={handleChange} />
                <button onClick={func}>Зарегистрироваться</button>
            </div>
        </div>
    )
}

export default Register