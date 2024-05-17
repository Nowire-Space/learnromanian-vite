import {useState} from 'react';
import classes from "./Registration.module.css";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle.jsx";
import Input from "../UI/Input/Input";
import {FaPen} from "react-icons/fa";
import Button from "../UI/Button/Button";
import AccountService from "../../services/AccountService";
import {useNavigate} from "react-router-dom";

const Registration = ( props ) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [termsCheckbox, setTermsCheckbox] = useState(true);
    const [termsCheckboxError, setTermsCheckboxError] = useState('');

    const [loading, setLoading] = useState(false);
    const [registrationError, setRegistrationError] = useState(false);

    const [emailMinLength] = useState(6);
    const [emailMaxLength] = useState(40);
    const [nameMinLength] = useState(2);
    const [nameMaxLength] = useState(25);
    const [passwordMinLength] = useState(6);
    const [passwordMaxLength] = useState(20);

    const registrationHandler = (event) => {
        event.preventDefault();
        setLoading(true);
        validateForm() && AccountService
            .register(email, firstname, lastname, phoneNumber, password, confirmPassword)
            .then((response) => {
                    console.log('ok', response.data);
                    navigate("/login", { replace: true });
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.messages) ||
                        error.messages ||
                        error.toString();
                    console.log('error', resMessage);
                    setLoading(false);
                    setRegistrationError(resMessage);
                });
    }

    const validateForm = () => {
        const validEmailRegEx = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        const validPhoneRegEx = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
        let valid = true;

        if (email.trim().length < emailMinLength) {
            setEmailError('Minimal email length is 6 characters!');
            valid = false;
        } else if (email.trim().length > emailMaxLength) {
            setEmailError('Maximum email length is 40 characters!');
            valid = false;
        } else if (!validEmailRegEx.test(email.trim())) {
            setEmailError('Please provide valid email!');
            valid = false;
        }

        if (firstname.trim().length < nameMinLength) {
            setNameError('Minimal first name length is 2 characters!');
            valid = false;
        } else if (firstname.trim().length > nameMaxLength) {
            setNameError('Maximum first name length is 25 characters!');
            valid = false;
        }

        if (lastname.trim().length < nameMinLength) {
            setNameError('Minimal first name length is 2 characters!');
            valid = false;
        } else if (lastname.trim().length > nameMaxLength) {
            setNameError('Maximum first name length is 25 characters!');
            valid = false;
        }

        if (!validPhoneRegEx.test(phoneNumber.trim())) {
            setPhoneNumberError('Please provide valid phone number!');
            valid = false;
        }

        if (password.trim().length < passwordMinLength) {
            setPasswordError('Minimal password length is 6 characters!');
            valid = false;
        } else if (password.trim().length > passwordMaxLength) {
            setPasswordError('Maximum password length is 20 characters!');
            valid = false;
        }

        if (confirmPassword !== password) {
            setConfirmPasswordError('Password fields should match!');
            valid = false;
        }

        if (!termsCheckbox) {
            setTermsCheckboxError('Please read terms and check the checkbox!');
            valid = false;
        }
        return valid;
    }

    return(
        <div className={classes.Registration}>
            <div className={classes.Title}>
                <Title>Registration</Title>
                <Subtitle>Enter your details to proceed further</Subtitle>
            </div>
            <form onSubmit={registrationHandler}>
                <Input elementType='input'
                       type='email'
                       label='E-mail address'
                       icon={<i><FaPen/></i>}
                       placeholder='Your e-mail'
                       errorMessage={emailError}
                       changed={e => {
                           setEmail(e.target.value);
                           setEmailError('')
                       }}/>
                <div className={classes.Row}>
                    <Input elementType='input'
                           label='First name'
                           icon={<i><FaPen/></i>}
                           placeholder='Your name'
                           changed={e => {
                               setFirstname(e.target.value);
                               setNameError('')
                           }}/>
                    <Input elementType='input'
                           label='Last name'
                           icon={<i><FaPen/></i>}
                           placeholder='Your last name'
                           changed={e => {
                               setLastname(e.target.value);
                               setNameError('')
                           }}/>
                </div>
                {nameError &&
                    <div className={classes.Error}>
                        <p>{nameError}</p>
                    </div>
                }
                <Input elementType='input'
                       label='Phone number'
                       icon={<i><FaPen/></i>}
                       placeholder='Your phone number'
                       errorMessage={phoneNumberError}
                       changed={e => {
                           setPhoneNumber(e.target.value);
                           setPhoneNumberError('')
                       }}/>
                <Input elementType='password'
                       label='Password'
                       placeholder='Add password'
                       errorMessage={passwordError}
                       changed={e => {
                           setPassword(e.target.value);
                           setPasswordError('')
                       }}/>
                <Input elementType='password'
                       label='Confirm password'
                       placeholder='Confirm your password'
                       errorMessage={confirmPasswordError}
                       changed={e => {
                           setConfirmPassword(e.target.value);
                           setConfirmPasswordError('')
                       }}/>
                <div className={classes.Links}>
                    <div className={classes.Left}>
                        <Input elementName='termsAndConditionsCheckbox'
                               elementType='checkbox'
                               label='I agree with terms & conditions'
                               value={termsCheckbox}
                               errorMessage={termsCheckboxError}
                               changed={e => setTermsCheckbox(prevState => !prevState)}/>
                    </div>
                </div>
                <Button buttonType='Regular'
                        loading={loading}>
                    Register
                </Button>
                {registrationError &&
                    <div className={classes.Error}>
                        <p>{registrationError}</p>
                    </div>}
            </form>
        </div>
    );
}

export default Registration;