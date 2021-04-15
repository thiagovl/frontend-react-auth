import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

import AuthenticationService from '../service/AuthenticationService';
import { Context }  from '../context/AuthProvider';



const Home = () => {
    const history = useHistory();
    const { token }  = useContext(Context);
    const [tokenHeader, setTokenHeader] = useState('')
    const handleLogout = () => {
        AuthenticationService.logout();
        history.push('/');
    }

    

    useEffect(() => {
        let tokenHeader = AuthenticationService.getTokenHeader();
        setTokenHeader(tokenHeader)
    })

    return (
        <div>
            <h1>Sorria, você está na Home</h1>
            <h3>Seu token: {token}</h3>
            <h5>Token do Header: {tokenHeader}</h5>
            <Button variant="contained" color="primary" onClick={() => history.push('/about')}>About</Button>
            <br/><br/>
            <Button variant="contained" color="primary" onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Home
