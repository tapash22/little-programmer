import { Location,Navigate,Outlet, useLocation } from "react-router-dom";
import useAuth from "../hookes/useAuth";

const RequireAuth = ({allowedRoles})=>{
    const {auth} = useAuth();
    const location = useLocation();
    return (
        auth?.user ? <Navigate to="/unauthorized" state={{from:location}} replace  />  : <Navigate to="/login" state={{from:location}} replace  /> 
    )
}

export default RequireAuth;