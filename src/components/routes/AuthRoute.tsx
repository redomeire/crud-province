import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
    if(localStorage.getItem('authorization'))
        return <Navigate to='/'/>

        return <Outlet/>
}
 
export default AuthRoute;