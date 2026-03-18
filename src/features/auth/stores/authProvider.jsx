import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState } from "react";
import { ACCESS_TOKEN_STORAGE_KEY, REFRESH_TOKEN_STORAGE_KEY } from "../../../config/constants";
import { User } from "../../user/models/userModel";
import { toast } from "sonner";
import { authApi } from "../api/authApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [token, setToken] = useState(
        () => {
            return localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)
        }
    );

    const [user, setUser] = useState(
        () => {
            const savedToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)
            if (savedToken) {
                try {
                    //token payload részéből ki tudom nyerni a felhasználóhoz tartozó információkat
                    const decoded = jwtDecode(savedToken);
                    return User.fromToken(decoded);
                }
                catch (error) {
                    //hiba esetén token törlése
                    toast.error('Hiba a felhasználó azonosítása során')
                    localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY)
                    return null;
                }
            }
            else {
                return null;
            }
        }
    );

    const login = (accessToken) => {
        //token elmentése localStorage-be
        localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken);

        //token elmentése a memóriába - React globális állapotváltozóba
        setToken(accessToken);

        //token dekódolása és a User osztálypéldány létrehozása - majd elmentése React globális állapotváltozóba
        const decodedToken = jwtDecode(accessToken);
        const user = User.fromToken(decodedToken);
        console.log(user);
        setUser(user)
    }

    const logout = () => {
        authApi.logout();
        setToken(null);
        setUser(null)

        localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
    }

    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}