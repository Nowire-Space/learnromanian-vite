import './App.module.css'
import AuthProvider from "./provider/authProvider.jsx";
import SideDrawer from "./pages/Navigation/SideDrawer/SideDrawer.jsx";
import {useState} from "react";
import Toolbar from "./pages/Navigation/Toolbar/Toolbar.jsx";
import {BrowserRouter} from "react-router-dom";
import About from "./pages/About/About.jsx";
import Routes from "./routes/Routes.jsx";
import classes from "./App.module.css";

function App() {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(prevState => !prevState);
        // this.setState( ( prevState ) => {
        //   return { showSideDrawer: !prevState.showSideDrawer };
        // } );
    }

    return (
        <div className={classes.App}>
            <AuthProvider>
                <BrowserRouter basename="/">
                    <Toolbar/>
                    <div className={classes.Container}>
                        <main className={classes.Content}>
                            <Routes />
                        </main>
                    </div>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
