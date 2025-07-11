import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const login = (email, password) => {
        // Hardcoded credentials
        if (email === "admin@example.com" && password === "password123") {
            const fakeUser = { email };
            setUser(fakeUser);
            localStorage.setItem("user", JSON.stringify(fakeUser));
            navigate("/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
