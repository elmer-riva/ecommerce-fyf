import axios from "axios";

const API_URL = "http://20.82.139.131:5000";

const http = axios.create({
    baseURL: API_URL,
});

export class ProductsService {
    getProducts() {
        return http.get('/products');
    }
}