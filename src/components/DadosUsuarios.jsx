import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../contexts/ValidacoesCadastro";
import useErros from "../hooks/useErros";

function DadosUsuarios({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, verificaCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(evento) => {
                evento.preventDefault();
                if (possoEnviar()) aoEnviar({ email, senha });
            }}
        >
            <TextField
                value={email}
                onChange={(evento) => {
                    setEmail(evento.target.value);
                }}
                type="email"
                label="Email"
                name="email"
                id="email"
                variant="standard"
                margin="dense"
                placeholder="Escolha um email"
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
                placeholder="Escolha uma senha"
                fullWidth
                required
            />

            <Button size="medium" type="submit" variant="contained" sx={{ mt: 2, ml: 28 }}>
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuarios;
