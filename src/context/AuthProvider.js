import React, { createContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AuthenticationService from '../service/AuthenticationService';
import { useHistory } from "react-router-dom";
import loader from '../assets/animação/loader_02.gif';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const Context = createContext();

const useStyles = makeStyles(theme => ({
        loader: {
            position: 'absolute',
            top: '28%',
            [theme.breakpoints.down("sm")]: {
               left: '30%',
            },
            [theme.breakpoints.down("md")]: {
                left: '35%',
            },
            [theme.breakpoints.down("xl")]: {
                left: '40%',
            },

            zIndex: 1000
        },
        paper: {
            background: 'white',
            borderColor: 'white',
        },
}))

const AuthProvider = ({ children }) => {
    const history = useHistory();
    const classes = useStyles();
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [textError, setTextError] = useState(false);
    const [token, setToken] = useState('');
    
    // Faz login
    async function handleLogin(){
        setLoading(true)
        await AuthenticationService
            .executeJwtAuthenticationService(email, password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(email, response)
                setToken(response.data);
                setAuthenticated(true);
            }).catch(() => {
                setTextError(true);
            })
            setLoading(false);
    }

    // Faz logout
    async function handleLogout(){
        await AuthenticationService.logout();
        history.push('/');
    }

    async function handleEmail(email){
        setEmail(email)
    }

    async function handlePassword(password){
        setPassword(password)
    }

    

    return (
        <Context.Provider value={{ token, handleLogin, handleLogout, email, setEmail: handleEmail, password, setPassword: handlePassword, textError, authenticated }}>
            {children}

            { loading == true 
                ? 

                <Grid
                    className={classes.mainContainer}
                    container
                    direction="column"
                >
                    <Grid item>
                        <Grid 
                            item
                            sm
                            className={classes.loader}
                        >
                            <Paper variant="outlined" className={classes.paper}>
                                <img src={loader} alt="Loader" />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                 :''}

        </Context.Provider>
    )
}

export { Context,  AuthProvider}