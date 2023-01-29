import {publicRequest} from './requestMethod';
const AuthApi = {
    login: (data) => {
        const url = '/auth/login';
        return publicRequest.post(url,  data );

    },
    register: (data) => {
        const url = '/auth/register';
        return publicRequest.post(url,  data );
    },
};
export default AuthApi;
