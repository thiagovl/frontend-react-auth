import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import imageLogin from '../assets/login.jpg';
import imageCpanel from '../assets/cpanel.png';
import { Context }  from '../context/AuthProvider';
import AuthenticationService from '../service/AuthenticationService';
import history from '../history'

const useStyles = makeStyles(theme => ({
    mainContainer: {
        // [theme.breakpoints.down("sm")]: {
        //     marginTop: "3em"
        // },
        // [theme.breakpoints.down("xs")]: {
        //     marginTop: "2em"
        // }
    },
    imageContainer: {
        marginTop: '3em',
    },
    image: {
        width: '100%',
        [theme.breakpoints.down("sm")]: { 
            width: '20em'
        },
    },
    divSpace: {
        marginTop: '2em',
        [theme.breakpoints.down("sm")]: { 
            marginBottom: '1em',
        },
    },
    formContainer: {
        marginTop: '3em',
        minWidth: "21em",
        alignItems: 'center',
        justify: 'center',
        margin: theme.spacing(10),
    },
    formInputText: {
        marginTop: theme.spacing(4),
        
    },
    iconInputText: {
        color: theme.palette.common.orange,
    },
    errorText: {        
        marginTop: '0.8em'
    },
    enterButton: {
        marginTop: theme.spacing(8),
        borderRadius: 50
    },
    loader: {
        zIndex: 1000
    }
    
}));


const Login = () => {
    const classes = useStyles();
    // const history = useHistory();
    const { token, handleLogin, email, setEmail, password, setPassword, textError }  = useContext(Context);

    useEffect(() => {
        const token = AuthenticationService.isUserLoggedIn();
        if (token) {
            history.push('/home')
        }
    })

    return (
        <Grid
            className={classes.mainContainer}
            container
            direction="column"
        >
            
            <Grid item>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item sm className={classes.imageContainer}>
                        <Grid
                            container
                            justify="center"
                            alignItems="center"
                        >
                            <img src={imageLogin} alt="" className={classes.image}/>
                        </Grid>
                    </Grid>

                    <Grid item sm className={classes.formContainer}>
                        <Grid
                            container
                            justify="center"
                            alignItems="center"
                            direction="column"
                        >
                            <img src={imageCpanel} alt="" width={"50%"} />

                            <Grid item className={classes.divSpace}>

                                <FormControl fullWidth className={classes.formInputText}>
                                    <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
                                    <Input
                                        id="outlined-adornment-amount" 
                                        placeholder="Entre com seu e-mail"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <PersonIcon className={classes.iconInputText} />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>

                                <FormControl fullWidth className={classes.formInputText}>
                                    <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
                                    <Input
                                        id="outlined-adornment-amount" 
                                        type='password'
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="Entre com sua senha"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <VpnKeyIcon className={classes.iconInputText} />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                
                                {
                                    textError ? 
                                    <Typography 
                                        className={classes.errorText}
                                        align= 'center' 
                                        color= 'error'
                                    >
                                        Login ou senha invalidos!
                                    </Typography>
                                    : 
                                    ' '
                                }

                            </Grid>
                            <Button onClick={ () => handleLogin(email, password) } variant="contained" color="primary" className={classes.enterButton}>
                                Entar
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login
