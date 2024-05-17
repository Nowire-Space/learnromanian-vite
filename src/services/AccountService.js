import axiosBackend from '../axios-backend';

class AccountService {
    static logIn(username, password) {
        return axiosBackend
            .post('account/authenticate', {username, password})
            .then(response => {
                return response.data;
            });
    }

    static register(email, firstname, lastname, phoneNumber, password, confirmPassword) {
        return axiosBackend.post( 'account/create', {
            'userFirstName': firstname,
            'userFamilyName': lastname,
            'userPhoneNumber': phoneNumber,
            'userEmail': email,
            'userPassword': password,
            'userPasswordCheck': confirmPassword
        } );
    }

    static validate(token) {
        return axiosBackend.post( 'account/validate/'.concat(token) );
    }

    static reset(email) {
        console.log('calling', email);
        return axiosBackend.post('account/password/reset', {email});
    }

    static getSessionToken() {
        return JSON.parse(localStorage.getItem('token'));
    }

    static getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    static getProfile(token) {
        console.log('calling for profile', token);
        return axiosBackend
            .get('account/current',
                {headers: {
                    'Authorization' : 'Bearer ' + token
                }})
            .then(response=> {
                console.log('user response', response);
                return response.data;
            });
    }
}

export default AccountService;