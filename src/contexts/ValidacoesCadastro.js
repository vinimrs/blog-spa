import React from "react";

const ValidacoesCadastro = React.createContext({
    cpf: valorDefault,
    senha: valorDefault,
});

function valorDefault(dados) {
    return {valido: true, texto: ""}
}

export default ValidacoesCadastro;
