import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    if(localStorage.getItem('authorization'))
        return <Outlet/>

        return <Navigate to='/login'/>
}
 
export default PrivateRoute;