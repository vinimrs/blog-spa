import { Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import Finalizacao from "./Finalizacao";

function CamposCadastro({ aoEnviar }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            aoEnviar(dadosColetados);
        }
    });

    const formularios = [
        <DadosUsuarios aoEnviar={adicionaDados} />,
        <DadosPessoais
            aoEnviar={adicionaDados}
            retorna={retorna}
        />,
        <Finalizacao />
        
    ];

    function adicionaDados(dados) {

        setDados({ ...dadosColetados, ...dados });
        console.log(dadosColetados);
        proximo();
    }

    function retorna() {
        setEtapaAtual(etapaAtual - 1);
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <>
            <Stepper activeStep={etapaAtual} sx={{mt: 2, mb: 2}}>
                <Step>
                    <StepLabel>Dados Login</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Pessoal</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Finalização</StepLabel>
                </Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>
    );
}

export default CamposCadastro;
