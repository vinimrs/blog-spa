import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Finalizacao = () => {
    return (
        <Container>
            <Typography variant='h5'>Seu cadastro foi realizado!</Typography>
            <Link to='/'>
                <Button sx={{ml: 12, mt: 2}} variant="contained">Login</Button>
            </Link>
        </Container>
    );
};

export default Finalizacao;