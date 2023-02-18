import {publicRequest} from './requestMethod';
const UserApi = {
    getAllUser: (data) => {
        const url = `/user/?page=${data.page}&limit=${data.limit}`;
        return publicRequest.get(url);

    },
    getUserById: (id) => {
        const url = '/user/:id';
        return publicRequest.get(url,  id );
    },
};
export default UserApi;
