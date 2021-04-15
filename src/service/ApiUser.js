import axios from 'axios';
import {API_LOCALHOST} from '../Constants';
import {API_HEROKU} from '../Constants';

class ApiUser {
    
    login = async (email, password) => {
        return await axios.post(
            `${API_HEROKU}/api/authenticate`,
            {
                email: email,
                password: password
            },
        )
        .then((response) => {
            console.log(response)
            console.log('Logado com sucesso!');
        })
        .catch((error) => {
            if (error.response) {
                // console.log(error.response.data);
                console.log(error.response.status);
                // console.log(error.response.headers);
            }
        });
    }

    getUsers = () => {
        return axios({
            method: 'GET',
            url: `${API_HEROKU}/api/users`,
            headers:{
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aGlhZ28iLCJleHAiOjE2MTgzOTY4NDIsImlhdCI6MTYxODM2MDg0Mn0.1guQVdbh3hLn0aSaJlAXSyR7iAGjLZ1Z_TqcVdo1nQ1R6twc_Q4kdUnPArMWVtfpW-i51f3MNkh2FZOFBfGhGg'
            }
        })
        .then((response) => {
            console.log(response);
            // console.log(response.status); // Retorna o status
        })
        .catch((error) => {
            if (error.response) {
                // console.log(error.response.data);
                console.log(error.response.status);
                // console.log(error.response.headers);
            }
        });
    }
}

export default new ApiUser();