import { useState } from "react";

function useErros(validacoes) {
    const estadoInicial = criaEstadoInicial(validacoes);
    const [erros, setErros] = useState(estadoInicial);
    
    function verificaCampos(evento) {
        const { name, value } = evento.target;
        const novoErros = { ...erros };
        console.log(validacoes);
        console.log(value);
        novoErros[name] = validacoes[name](value);
        setErros(novoErros);
    }
    function possoEnviar() {
        for(let campo in erros) {
            if(!erros[campo].valido)
                return false
        }
        return true
    }

    return [erros, verificaCampos, possoEnviar];
}

function criaEstadoInicial(validacoes) {
    const estadoInicial = {};
    for(let campo in validacoes) {
        estadoInicial[campo] = { valido: true, texto: "" };
    }
    return estadoInicial;
}

export default useErros;
