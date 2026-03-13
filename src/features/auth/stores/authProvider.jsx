import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    //const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [token, setToken] = useState(null);
    const [tokenExp, setTokenExp] = useState(null);

    const login = (jwtToken) => {
        setToken(jwtToken);
        localStorage.setItem("token", jwtToken);

        const decodedToken = jwtDecode(jwtToken);
        console.log(decodedToken)
        setRole(decodedToken.szerepkor)
        setTokenExp(decodedToken.exp);
    }

    const logout = () => {
        setToken(null);
        setTokenExp(null);
        setRole(null);

        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{ token, tokenExp, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}