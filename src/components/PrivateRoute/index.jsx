import { Outlet, Navigate } from 'react-router';
import { localStorageHelpers } from '../../helpers/LocalStorageHelpers';

const PrivateRoute = ({ ...props }) => {
  const isAuth = localStorageHelpers.getToken()
  return isAuth ? <Outlet />: <Navigate to="/login" replace /> ;
};

export default PrivateRoute