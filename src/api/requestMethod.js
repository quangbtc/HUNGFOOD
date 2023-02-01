import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

const TOKEN =
    JSON.parse(localStorage.getItem('persist:root')) &&
    JSON.parse(localStorage.getItem('persist:root')).user
        ? JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser
              .accessToken
        : '';

export const publicRequest = axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'application/json',
        token: `Bearer ${TOKEN}`,
    },
});
export const publicRequestFile = axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'multipart/form-data',
        token: `Bearer ${TOKEN}`,
    },
});
