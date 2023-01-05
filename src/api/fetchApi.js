import axios from 'axios';
const searchProducts = (data) => {
    return axios.get(
        `http://localhost:8080/api/products/search?q=${data.q}`
        
    );
};
export { searchProducts };
