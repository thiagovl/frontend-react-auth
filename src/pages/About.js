import React, { useContext } from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

import { Context }  from '../context/AuthProvider';


const About = () => {
    const { token }  = useContext(Context);
    const history = useHistory();


    return (
        <div>
            <h5>{ token }</h5>
            <Button variant="contained" color="primary" onClick={() => history.push('/home')}>Home</Button>
        </div>
    )
}

export default About
