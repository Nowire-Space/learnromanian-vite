import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URI + '/learnromanian/0.0.1/api/'
});

export default instance;
