import React from "react";
import ValidacoesCadastro from "../contexts/ValidacoesCadastro";
import {
    validaCep,
    validaCPF,
    validaNomes,
    validaSenha,
    validaIdade,
} from "../models/validacoes";
import CamposCadastro from "../components/CamposCadastro";
import "../assets/css/componentes/formulario.css";
import { Container } from "@mui/material";

const FormularioCadastro = () => {
    return (
        <section className="formulario-container">
            <div className="formulario">
                <div>
                    <Container maxWidth="sm">
                        <ValidacoesCadastro.Provider
                            value={{
                                cpf: validaCPF,
                                senha: validaSenha,
                                nome: validaNomes,
                                sobrenome: validaNomes,
                                dataNascimento: validaIdade,
                                cep: validaCep,
                            }}
                        >
                            <CamposCadastro aoEnviar={aoEnviarForm} />
                        </ValidacoesCadastro.Provider>
                    </Container>
                </div>
            </div>
        </section>
    );
};

const aoEnviarForm = (dados) => {
    // sobeDados(dados);
    console.log(dados);
    localStorage.setItem('dados-usuario', JSON.stringify(dados));
    console.log(JSON.parse(localStorage.getItem('dados-usuario')));
};

export default FormularioCadastro;
