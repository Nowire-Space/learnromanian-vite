import axios from "axios";
import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

const AuthContext = createContext();

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

function getStorageValue(key, defaultValue) {
    // getting stored value
    const saved = localStorage.getItem(key);
    if (!saved === undefined) {
        const initial = JSON.parse(saved);
        return initial;
    }
    return defaultValue;
}

const AuthProvider = ({children}) => {
    // const [token, setToken_] = useState(localStorage.getItem("token"));
    // const [user, setUser_] = useState(localStorage.getItem("user"));

    const [token, setToken] = useLocalStorage("token", undefined);
    const [user, setUser] = useLocalStorage("user", undefined);

    // const setToken = (newToken) => {
    //     setToken_(newToken);
    // };
    //
    // const setUser = (newUser) => {
    //     setUser_(newUser);
    // };

    // useEffect(() => {
    //     console.log('token changed', token);
    //     localStorage.setItem('token', token);
    //     console.log('token changed2', token);
    // }, [token]);
    //
    // useEffect(() => {
    //     console.log('user changed', user);
    //     localStorage.setItem('user', user);
    //     console.log('user changed2', user);
    // }, [user]);

    const contextValue = useMemo(
        () => ({
            token,
            setToken,
            user,
            setUser
        }),
        [token, user]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;