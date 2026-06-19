import { Outlet, Navigate } from 'react-router';

const PrivateRoute = ({ ...props }) => {
  const isAuth = localStorage.getItem("token")
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute