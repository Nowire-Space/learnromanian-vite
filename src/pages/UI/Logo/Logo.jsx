import logoImageFull from '../../../assets/images/logo_image_full.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
            <img src={logoImageFull} alt="Logo"/>
    </div>
);

export default logo;