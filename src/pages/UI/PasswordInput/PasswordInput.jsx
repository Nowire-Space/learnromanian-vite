import classes from './PasswordInput.module.css';
import {FaRegEyeSlash, FaRegEye} from "react-icons/fa";
import {useState} from "react";

const passwordInput = ( props ) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const passwordVisibilityClickHandler = () => {
    setPasswordVisibility(prevState => !prevState);
  }

  let passwordInputIcon = passwordVisibility ?
    <i onClick={passwordVisibilityClickHandler}><FaRegEyeSlash/></i> :
    <i onClick={passwordVisibilityClickHandler}><FaRegEye/></i>;

  return(
    <div className={ classes.LabeledPasswordInput }>
      <label>
        {props.label}
        <div className={ classes.IconPasswordInput }>
          { passwordInputIcon }
          <input placeholder={props.placeholder}
                 value={ props.value }
                 onChange={ props.changed }
                 type={ passwordVisibility ? 'text' : 'password' }
          />
        </div>
      </label>
      <div className={classes.Error}>
        <p>{props.errorMessage}</p>
      </div>
    </div>
  );
}

export default passwordInput;