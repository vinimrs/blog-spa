import React, { useContext, useState } from "react";
import { Button, TextField, FormControlLabel, Switch } from "@mui/material";
import ValidacoesCadastro from "../contexts/ValidacoesCadastro";
import useErros from "../hooks/useErros";

function DadosPessoais({ aoEnviar, retorna }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, verificaCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(evento) => {
                evento.preventDefault();
                if (possoEnviar())
                    aoEnviar({
                        nome,
                        sobrenome,
                        cpf,
                        promocoes,
                        novidades,
                        dataNascimento,
                        cep, 
                        endereco, 
                        numero,
                        estado,
                        cidade
                    });
            }}
        >
            <TextField
                value={nome}
                onChange={(evento) => {
                    setNome(evento.target.value);
                }}
                onBlur={(e) => verificaCampos(e)}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id="nome"
                name="nome"
                label="Nome"
                type="text"
                variant="standard"
                margin="dense"
                fullWidth
                required
            />
            <TextField
                value={sobrenome}
                onChange={(evento) => {
                    setSobrenome(evento.target.value);
                }}
                onBlur={(e) => verificaCampos(e)}
                error={!erros.sobrenome.valido}
                helperText={erros.sobrenome.texto}
                id="sobrenome"
                name="sobrenome"
                label="Sobrenome"
                type="text"
                variant="standard"
                margin="dense"
                fullWidth
                required
            />
            <TextField
                sx={{ minWidth: 290 }}
                value={dataNascimento}
                id="dataNascimento"
                label="Data de nascimento"
                name="dataNascimento"
                variant="standard"
                margin="dense"
                onChange={(e) => {
                    setDataNascimento(e.target.value);
                }}
                onBlur={(e) => {
                    verificaCampos(e);
                }}
                placeholder="DD/MM/AAAA"
                error={!erros.dataNascimento.valido}
                helperText={erros.dataNascimento.texto}
                required
            />
            <TextField
                sx={{ ml: 4, minWidth: 225 }}
                value={cpf}
                onChange={(evento) => {
                    setCpf(evento.target.value);
                }}
                onBlur={(e) => {
                    verificaCampos(e);
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                name="cpf"
                label="CPF"
                variant="standard"
                margin="dense"
                placeholder="000.0000.0000-00"
                required
            />

            <TextField
                value={cep}
                onChange={(evento) => {
                    setCep(evento.target.value);
                }}
                onBlur={(e) => verificaCampos(e)}
                error={!erros.cep.valido}
                helperText={erros.cep.texto}
                id="cep"
                name="cep"
                label="CEP"
                variant="standard"
                placeholder="00000-000"
                margin="dense"
                sx={{ minWidth: 290 }}
            />
            <TextField
                value={endereco}
                onChange={(evento) => {
                    setEndereco(evento.target.value);
                }}
                id="endereco"
                name="endereco"
                label="Endereço"
                type="text"
                variant="standard"
                margin="dense"
                fullWidth
            />
            <TextField
                value={numero}
                onChange={(evento) => {
                    setNumero(evento.target.value);
                }}
                id="numero"
                name="numero"
                label="Número"
                type="number"
                variant="standard"
                margin="dense"
            />
            <TextField
                value={estado}
                onChange={(evento) => {
                    setEstado(evento.target.value);
                }}
                id="estado"
                name="estado"
                label="Estado"
                type="text"
                variant="standard"
                margin="dense"
            />
            <TextField
                value={cidade}
                onChange={(evento) => {
                    setCidade(evento.target.value);
                }}
                id="cidade"
                name="cidade"
                label="Cidade"
                type="text"
                variant="standard"
                margin="dense"
            />

            <FormControlLabel
            sx={{ml: 15, mt: 2, mb: 2}}
                control={
                    <Switch
                        checked={promocoes}
                        onChange={(evento) => {
                            setPromocoes(evento.target.checked);
                        }}
                    />
                }
                label="Promoções"
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={novidades}
                        onChange={(evento) => {
                            setNovidades(evento.target.checked);
                        }}
                    />
                }
                label="Novidades"
            />

            <Button
                sx={{ ml: 25 }}
                onClick={(evento) => {
                    retorna();
                }}
            >
                Voltar
            </Button>

            <Button variant="contained" type="submit" sx={{ ml: 2 }}>
                Finalizar
            </Button>
        </form>
    );
}

export default DadosPessoais;
