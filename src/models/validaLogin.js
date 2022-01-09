
export const validaEmail = (dadosInput) => {
    const dados = JSON.parse(localStorage.getItem('dados-usuario'));
    const email = dados.email;
    const emailInput = dadosInput;
    console.log(dadosInput);
    console.log(email, emailInput);
    
    if( email !== emailInput){
        return { valido: false, texto: "Email inválido!" };
    }
    return { valido: true, texto: "" };
};

export const validaSenha = (dadosInput) => {
    const dados = JSON.parse(localStorage.getItem('dados-usuario'));
    const senha = dados.senha;
    const senhaInput = dadosInput;
    console.log(senha, senhaInput);

    if (senha !== senhaInput) {
        return { valido: false, texto: "Senha inválida!" };
    }

    return { valido: true, texto: "" };
};
