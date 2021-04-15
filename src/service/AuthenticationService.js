import axios from 'axios'
import { API_HEROKU } from '../Constants'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const TOKEN_HEADER = 'token';

class AuthenticationService {

    executeJwtAuthenticationService(email, password) {
        return axios.post(`${API_HEROKU}/api/authenticate`, {
            email: email,
            password: password
        })
       
    }

    registerSuccessfulLoginForJwt(email, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, email);
        sessionStorage.setItem(TOKEN_HEADER, token.data);
        this.setupAxiosInterceptors(this.createJWTToken(token));
    }

    createJWTToken(token) {
        return token.data;
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        sessionStorage.removeItem(TOKEN_HEADER);
    }

    // Verifica se está logado
    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null) return false
        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null) return ''
        return user;
    }

    setupAxiosInterceptors(token) {

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config;
            }
        )
    }

    getTokenHeader = () => {
        let tokenHeader = sessionStorage.getItem(TOKEN_HEADER);
        return tokenHeader
    }
}

export default new AuthenticationService()