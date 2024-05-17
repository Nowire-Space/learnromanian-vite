import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem.jsx';
import LanguageSelector from './LanguageSelector/LanguageSelector.jsx';
import {useAuth} from "../../../provider/authProvider.jsx";

const NavigationItems = () => {
        const { token } = useAuth();

        const authenticatedItems =
            <ul className={classes.NavigationItems}>
                    <LanguageSelector/>
                    <NavigationItem link="/">Home</NavigationItem>
                    <NavigationItem link="/logout">Logout</NavigationItem>
            </ul>;

        const unAuthenticatedItems =
            <ul className={classes.NavigationItems}>
                    <LanguageSelector/>
                    <NavigationItem link="/about">Home</NavigationItem>
                    <NavigationItem link="/login">Log in</NavigationItem>
                    <NavigationItem link="/register">Registration</NavigationItem>
            </ul>;

        return token ? authenticatedItems : unAuthenticatedItems;
};

export default NavigationItems;