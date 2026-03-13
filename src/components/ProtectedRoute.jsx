import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../features/auth/stores/authProvider";

export function ProtectedRoute () {
    const { token, tokenExp, logout } = useAuth();
    const location = useLocation();

    if(!token){
        return <Navigate to="/login"/>
    }

    return <Outlet/>
}