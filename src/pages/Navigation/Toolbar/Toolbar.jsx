import classes from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo.jsx';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle.jsx';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.DrawerToggle}>
            <DrawerToggle className={classes.DrawerToggle}
                          menuButtonClicked={props.menuButtonClicked}/>
        </div>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <div className={classes.RightSide}/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;