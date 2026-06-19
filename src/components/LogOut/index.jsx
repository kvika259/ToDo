import { useNavigate } from 'react-router';

const LogOut = () => {    
    const navigate = useNavigate()
    const logout = () =>{
        localStorage.clear()
        navigate("/login")
    }
    return (
        <div>
            <button onClick={logout}>Выйти</button>
        </div>
    )
}

export default LogOut