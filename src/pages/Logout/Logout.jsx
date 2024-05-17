import {useNavigate} from "react-router-dom";
import {useAuth} from "../../provider/authProvider.jsx";
import {useEffect} from "react";

const Logout = () => {
    const {setToken, setUser} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken();
        setUser();
        navigate("/login", { replace: true });
    };

    useEffect(() => {
        handleLogout();
    }, []);
};

export default Logout;