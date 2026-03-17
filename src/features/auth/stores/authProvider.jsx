import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState } from "react";
import { TOKEN_STORAGE_KEY } from "../../../config/constants";
import { User } from "../../user/models/userModel";
import { toast } from "sonner";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [token, setToken] = useState(
        () => {
            return localStorage.getItem(TOKEN_STORAGE_KEY)
        }
    );

    const [user, setUser] = useState(
        () => {
            const savedToken = localStorage.getItem(TOKEN_STORAGE_KEY)
            if (savedToken) {
                try {
                    //token payload részéből ki tudom nyerni a felhasználóhoz tartozó információkat
                    const decoded = jwtDecode(savedToken);
                    return User.fromToken(decoded);
                }
                catch (error) {
                    //hiba esetén token törlése
                    toast.error('Hiba a felhasználó azonosítása során')
                    localStorage.removeItem(TOKEN_STORAGE_KEY)
                    return null;
                }
            }
            else {
                return null;
            }
        }
    );

    const login = (jwtToken) => {
        //token elmentése localStorage-be
        localStorage.setItem(TOKEN_STORAGE_KEY, jwtToken);

        //token elmentése a memóriába - React globális állapotváltozóba
        setToken(jwtToken);

        //token dekódolása és a User osztálypéldány létrehozása - majd elmentése React globális állapotváltozóba
        const decodedToken = jwtDecode(jwtToken);
        const user = User.fromToken(decodedToken);
        console.log(user);
        setUser(user)
    }

    const logout = () => {
        setToken(null);
        setUser(null)

        localStorage.removeItem(TOKEN_STORAGE_KEY);
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