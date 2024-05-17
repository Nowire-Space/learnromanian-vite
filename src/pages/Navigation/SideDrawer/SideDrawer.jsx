import classes from './SideDrawer.module.css';
import LogoImage from '../../LogoImage/LogoImage.jsx';
import NavigationItems from '../NavigationItems/NavigationItems.jsx';
import Backdrop from '../../UI/Backdrop/Backdrop.jsx';
import Aux from '../../../hoc/Auxiliary/Auxiliary.jsx';

const SideDrawer = ( props ) => {
    let attachedSideDrawerClasses = [classes.SideDrawer, classes.Close];
    if (props.show) {
        attachedSideDrawerClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop
                show={props.show}
                clicked={props.closeClicked}/>
            <div className={attachedSideDrawerClasses.join(' ')}>
                <div className={classes.Logo}>
                    <LogoImage/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
}

export default SideDrawer;