import {Route, Routes, Navigate} from "react-router-dom";
import {useAuth} from "../provider/authProvider.jsx";
import Login from "../pages/Login/Login.jsx";
import Logout from "../pages/Logout/Logout.jsx";
import About from "../pages/About/About.jsx";
import Registration from "../pages/Registration/Registration.jsx";

const AppRoutes = () => {
    const {token} = useAuth();

    return (
        <Routes>
            <Route path='/about' element={<About />} />

            <Route path='/login' element={token ? <Navigate replace to={'/'}/> : <Login />} />
            <Route path='/register' element={token ? <Navigate replace to={'/'}/> : <Registration />} />

            <Route path='/' element={token ? <div>User Home Page</div> : <Navigate replace to={'/login'}/>} />
            <Route path='/profile' element={token ? <div>User Profile</div> : <Navigate replace to={'/login'}/>} />
            <Route path='/logout' element={token ? <Logout/> : <Navigate replace to={'/login'}/>} />

            {/*TODO implement 404 page*/}
            <Route path='*' element={<div>Page Not Found 404</div>}/>
        </Routes>
    );
};

export default AppRoutes;