import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../features/auth/stores/authProvider";
import { AccessDeniedPath } from "./AccessDeniedPath";
import { useEffect } from "react";
import { toast } from "sonner";

/**
 * 
 * @param {object} params
 * @param {string[]} params.allowedRoles Komponens eléréséhez szükséges szerepkörök - tömbként megadva
 * @returns 
 */
export function ProtectedRoute({ allowedRoles }) {
    const { token, user, logout } = useAuth();
    const location = useLocation();

    useEffect(() => {
        if (!token || !user || !user.lejarToken) return;

        const handleExpiration = () => {
            logout();
            toast.error('Lejárt a munkamenet, jelentkezz be újra!');
        }

        const expirationTimeInMs = (user.lejarToken * 1000) - Date.now();

        if (expirationTimeInMs <= 0) {
            handleExpiration();
        }
        else {
            //időzítő indítása, felhasználó kiléptetése a token lejártakor
            const timer = setTimeout(() => {
                handleExpiration();
            }, expirationTimeInMs)

            // korábbi időzítő törlése, ha a felhasználó átkattint egy másik oldalra
            return () => clearTimeout(timer);
        }


    }, [user, location.pathname])

    if (!token || !user) {
        return <Navigate to="/login" />
    }

    if (allowedRoles && !allowedRoles.includes(user.szerepkor)) {
        return <AccessDeniedPath />
    }

    return <Outlet />
}