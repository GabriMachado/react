import React, { useEffect } from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';
import Carrossel from '../../components/carrossel/Carrossel'
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import useLocalStorage from 'react-use-localstorage';
import { Link, useNavigate } from 'react-router-dom';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/token/Reducer';
import { toast } from 'react-toastify';

function Home() {
    let navigate = useNavigate();
    // const [token, setToken] = useLocalStorage('token');

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      )

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado' ,{
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            });
            navigate("/login")

        }
    }, [token])

    return (
        <>
             <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Qual seu perfume preferido? Conta pra gente!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem/>
                        </Box>
                        <Link to="/posts">
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
               {/* <Grid item xs={6} >
                    <img src="https://img.freepik.com/fotos-premium/padrao-de-fundo-de-textura-de-marmore-branco-com-alta-resolucao_38648-238.jpg?w=2000" alt="" width="1000px" height="500px" />
                </Grid>  */}
                <Grid xs={12} className='postagens'>
                <TabPostagem/>
                </Grid>
                <Carrossel/>
    </Grid>

    {/* <Grid container style={{ marginTop: "8px" }}>
      <Grid item xs={12}>
        <Carrossel />
      </Grid>
    </Grid> */}
        </> 
    );
}

export default Home;