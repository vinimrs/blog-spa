import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useErros from "../hooks/useErros";

function DadosLogin({ validacoes }) {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, verificaCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(evento) => {
                evento.preventDefault();
                if (possoEnviar()) history.push('/home');
            }}
        >
            <TextField
                value={email}
                onChange={(evento) => {
                    setEmail(evento.target.value);
                }}
                onBlur={(e) => verificaCampos(e)}
                error={!erros.email.valido}
                helperText={erros.email.texto}
                type="email"
                label="Email"
                name="email"
                id="email"
                variant="standard"
                margin="dense"
                placeholder="Entre com seu email..."
                fullWidth
                required
            />
            <TextField
                value={senha}
                onChange={(evento) => {
                    setSenha(evento.target.value);
                }}
                onBlur={(e) => verificaCampos(e)}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                type="password"
                label="Senha"
                name="senha"
                id="senha"
                variant="standard"
                margin="dense"
                placeholder="Entre com sua senha..."
                fullWidth
                required
            />


                <Button size="medium" type="submit" variant="contained" sx={{ mt: 2, ml: 21 }}>
                    Entrar
                </Button>
                <Button size="medium" variant="text" sx={{ mt: 2, ml: 2}}>
                    <Link to='/cadastro'>Cadastrar</Link> 
                </Button>
        </form>
    );
}

export default DadosLogin;