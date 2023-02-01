import { publicRequest, publicRequestFile } from './requestMethod';

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
        const url = `/product/find?q=${data.q}`;
        return publicRequest.get(url);
    },
    updateProduct: (id) => {
        const url = `/product/update/${id}`;
        return publicRequest.put(url);
    },
    createProduct: (data) => {
        const url = '/product/add';
        return publicRequestFile.post(url, data);
    },
    deleteProduct: (id) => {
        const url = `/product/delete/${id}`;
        return publicRequest.delete(url);
    },
};
export default ProductApi;
