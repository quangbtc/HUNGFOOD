import { publicRequest } from './requestMethod';

const ProductApi = {
    getAll: (data) => {
        const url = data && data.q ? `/product/find?q=${data.q}` : '/product/find';
        return publicRequest.get(url);
    },
    getProductById: (id) => {
        const url = `/product/find/${id}`;
        return publicRequest.get(url);
    },
    searchProduct: (data) => {
        const url = `/product/search?q=${data.q}`;
        return publicRequest.get(url);
    },
    updateProduct: (id) => {
        const url = `/product/update/${id}`;
        return publicRequest.put(url);
    },
    createProduct: (data) => {
        const url = '/product/add';
        return publicRequest.post(url, data);
    },
};
export default ProductApi;
