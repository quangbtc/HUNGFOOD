import { publicRequest } from './requestMethod';

const OrderApi = {
   
    createOrder: (data) => {
        const url = '/order/add';
        return publicRequest.post(url, data);
    }

};
export default OrderApi;
