import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './Footer.css';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';

function Footer() {

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    var footerComponent
    if(token !== ""){
        footerComponent =
        <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Me siga nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/gabriel.machado.5220665" target="_blank">
                                <FacebookIcon className='redes'/>
                            </a>
                            <a href="https://www.instagram.com/gabrri__/" target="_blank">
                                <InstagramIcon className='redes'/>
                            </a>
                            <a href="https://www.linkedin.com/in/gabriel-machado-s/" target="_blank">
                                <LinkedInIcon className='redes'/>
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos'>Gabriel Machado © 2023</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://outlook.live.com/">
                                <Typography variant="subtitle2" gutterBottom className='textos' align="center">gabriel.mach@hotmail.com</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    }
    return (
        <>
           {footerComponent}
        </>
    )
}

export default Footer;