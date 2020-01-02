import axios from 'axios';

const api = axios.create({
    baseURL:'https://omnistack-backend-leo.herokuapp.com',
});

export default api;