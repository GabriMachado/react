import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { addToken } from '../../../store/token/Actions';
import { toast } from 'react-toastify';


function Navbar() {
    // const [token, setToken] = useLocalStorage('token')

    let navigate = useNavigate();

    const dispatch = useDispatch()
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário deslogado' ,{
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined
        });
        navigate('/login')
    }
    var navbarComponent;

    if (token !== '') {
        navbarComponent =

            <AppBar position="static" className="barrainicial">
                <Toolbar variant="dense">
                    {/* <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box> */}

                    <Box display="flex" justifyContent="start">
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{ color: "white" }}>
                                    Home
                                </Typography>
                            </Box>
                        </Link>


                        <Link to='/posts' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>


                        <Box mx={1} className='cursor'>
                            <Link to='/temas' className='text-decorator-none'>
                                <Typography variant="h6" style={{ color: "white" }}>
                                    Temas
                                </Typography>
                            </Link>
                        </Box>

                        <Link to='/formularioTema' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar Tema
                                </Typography>
                            </Box>
                        </Link>


                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" style={{ color: "white" }}>
                                Logout
                            </Typography>
                        </Box>

                    </Box>

                </Toolbar>
            </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    );
}

export default Navbar;