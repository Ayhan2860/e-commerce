import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({children, redirectPath = "/", admin}) {
    const {loggedIn, user } = useAuth()
    if(!loggedIn)
    {
          return <Navigate to={redirectPath} />
    }
    if(admin && user.role !== "admin")
    {
        return <Navigate to={redirectPath} />
    }
    return children ? children : <Outlet />;
}

export default ProtectedRoute;