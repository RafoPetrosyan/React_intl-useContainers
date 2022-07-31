import axios from 'axios';
import Account from "../../helpers/Account";
import history from "../../helpers/history";

const httpClient = axios.create({
    baseURL: 'https://timeless.brainfors.am/api',
});

httpClient.interceptors.request.use((config) => {

    const accessToken = Account.getToken();
    // const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmJlZmI0NjE1NTZjMjU5MWJjNzViYSIsImlhdCI6MTY1NzczMzE5OX0.IFnHSNfOCox1R7UyekwR4i-rNpaw70h3NQjAYw7KK-g';

    if (accessToken) {
        config.headers['x-authorization'] = accessToken
    }
    return config
});

httpClient.interceptors.response.use(

    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.log('401');
            history.push('/auth/sign-in');
        }
        if (error.response && error.response.data && error.response.status !== 401) {
            console.log('!401');
        }
        return Promise.reject(error)
    }
);

export default httpClient;