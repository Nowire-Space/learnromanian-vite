import {useEffect, useState} from 'react';

import ProfileService from "../../services/ProfileService";

import classes from './Profile.module.css';
import Title from "../UI/Title/Title";
import Button from '../UI/Button/Button';
import AccountService from "../../services/AccountService";

const Profile = () => {

    const [familyName, setFamilyName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role, setRole] = useState('');
    const [photo, setPhoto] = useState(undefined);

    useEffect(() => {
        console.log('runned')
        ProfileService
            .getProfile()
            .then((profile) => {
                setFamilyName(profile.userFamilyName);
                setName(profile.userFirstName);
                setEmail(profile.userEmail);
                setPhoneNumber(profile.userPhoneNumber);
                setRole(profile.role.roleName.replace('ROLE_', ''));
                // setPhoto()
            }, error => {
                //TODO
                console.log("Error while getting profile data!")
            })
    }, [token]);

    return (
        <div className={classes.Profile}>
            <Title>Your Profile</Title>
            <div className={classes.Body}>
                {/*<div className={classes.Photo}>*/}
                {/*    <ProfilePhoto className={classes.ProfilePhoto}*/}
                {/*                  profilePhoto={this.state.profilePhoto}/>*/}
                {/*</div>*/}
                <div className={classes.Info}>
                    <p>{familyName} {name} | {role}</p>
                    <p>Număr de telefon: {phoneNumber}</p>
                    <p>E-mail: {email}</p>
                    <div className={classes.Password}>
                        <Button buttonType='Regular' halfSize>Schimbă parola</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;