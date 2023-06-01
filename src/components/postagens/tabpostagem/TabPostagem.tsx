import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange} className="informacoes">
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre o blog" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre mim:</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className="titulo">Olá, eu me chamo Gabriel Machado, tenho 23 anos e moro em Caçapava-SP. O blog foi criado para trazer reviews e opniões sobre perfumes nacionais e importados, já que desde criança sempre fui apaixonado por isso. Espero que eu possa ajudar na hora de comprar o seu perfume da vida. Qualquer sugestão entre em contato comigo nos canais compartilhados, vou amar bater um papo com você.
                     Com muito carinho, Gabriel!</Typography>
                    
                    <img src="https://i.imgur.com/Tk5cNgY.png" alt="" className='fotosobre' />
               
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;