import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../features/auth/stores/authProvider";
import { AccessDeniedPath } from "./AccessDeniedPath";

/**
 * 
 * @param {object} params
 * @param {string[]} params.allowedRoles Komponens eléréséhez szükséges szerepkörök - tömbként megadva
 * @returns 
 */
export function ProtectedRoute ( {allowedRoles} ) {
    const { token, user} = useAuth();
    const location = useLocation();

    if(!token || !user){
        return <Navigate to="/login"/>
    }

    if(allowedRoles && !allowedRoles.includes(user.szerepkor)){
        return <AccessDeniedPath/>
    }

    return <Outlet/>
}