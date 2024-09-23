import axios from "axios";

const API_URL = "http://20.82.139.131:5000";

const http = axios.create({
    baseURL: API_URL,
});

export class UsersService {
    getUsers() {
        return http.get('/customers');
    }
    validateUser(user) {
        this.getUsers().then (response => {
            const users = response.data;
            let valid = false;
            users.forEach(element => {
                if (element.username === user.username && element.password === user.password) {
                    valid = true;
                }
            });
            return valid;
        })

    }
}