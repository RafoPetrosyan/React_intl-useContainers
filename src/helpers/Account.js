class Account {
    static getToken() {
        return localStorage.getItem('accessToken') || '';
    }

    static setToken(token) {
        localStorage.setItem('accessToken', token);
    }

    static setAccount(data) {
        localStorage.setItem('currentUser', JSON.stringify(data));
    }

    static getAccount() {
        let data;
        try {
            data = JSON.parse(localStorage.getItem('currentUser'));
        } catch (e) {
            data = null;
        }
        return data;
    }

    static delete() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('currentUser');
    }
}

export default Account;
