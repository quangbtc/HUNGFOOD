import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
    .currentUser.accessToken;

export const publicRequest = axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'multipart/form-data',
        token: `Bearer ${TOKEN}`,
    },
});
