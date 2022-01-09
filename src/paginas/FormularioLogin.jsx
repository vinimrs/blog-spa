import { Container } from "@mui/material";
import React from "react";
import "../assets/css/componentes/formulario.css";
import DadosLogin from "../components/DadosLogin";
import { validaEmail, validaSenha} from "../models/validaLogin"

const FormularioLogin = () => {
    return (
        <section className="formulario-container">
            <div className="formulario">
                <div>
                    <Container maxWidth="sm">
                        <DadosLogin
                            validacoes={{
                                email: validaEmail,
                                senha: validaSenha,
                            }}
                        />
                    </Container>
                </div>
            </div>
        </section>
    );
};



export default FormularioLogin;
