import { useNavigate } from 'react-router';
import { localStorageHelpers } from '../../helpers/LocalStorageHelpers';


const LogOut = () => {    
    const navigate = useNavigate()
    const logout = () =>{
        localStorageHelpers.removeToken()
        navigate("/login")
    }
    return (
        <div>
            <button onClick={logout}>Выйти</button>
        </div>
    )
}

export default LogOut