import imageLogo from '../../assets/images/logo_image.png';
import classes from './LogoImage.module.css';

const logoImage = () => (
    <div className={classes.Logo}>
            <img src={imageLogo} alt="LogoImage"/>
    </div>
);

export default logoImage;