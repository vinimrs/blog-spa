export function validaCPF(cpf) {
    let erroCpf = { valido: true, texto: "" };
    const cpfFormatado = cpf.replace(/[^\d]/g, "");

    if (cpfFormatado.length === 11) {
        if (!calculaCpf(cpfFormatado)) 
            erroCpf = { valido: false, texto: "O CPF inserido é inválido!" };
    } else {
        erroCpf = { valido: false, texto: "O CPF deve ter 11 dígitos!" };
    }
    return erroCpf;
}

function calculaCpf(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF === "00000000000") return false;

  for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11))  Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11))  Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

export function validaSenha(senha) {
    const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, 'g');
    const resultado = regex.test(senha);
    if(!resultado) {
        return  { valido: false, texto: "A senha deve estar entre 8 e 10 carecteres, e deve conter letra maiúscula, minúscula, número e caractere especial." }
    } 
    return  { valido: true, texto: "" }
}

export function validaNomes(nome){
    if(nome.length < 3 || nome.length > 29){
        return  { valido: false, texto: "A palavra deve estar entre 3 e 29 caracteres." }
    }
    return  { valido: true, texto: "" }
}

export function validaIdade(data) {
    const numeroData = data.replace(/[^\d]/g, '');
    let dataFormatada = (numeroData.substring(4,8) + "-" + numeroData.substring(2,4) + "-" + numeroData.substring(0,2)) ;                 
    const dataRecebida = new Date(dataFormatada);

    if(!ehMaior18(dataRecebida)){
        return {valido: false, texto: "Você deve ser maior de 18 anos para se cadastrar!"}
    }
    return  { valido: true, texto: "" }
}

const ehMaior18 = (data) => {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
};

export function validaCep(cep) {
    const regex = new RegExp(/^\d{5}[-]?\d{3}$/, 'g');
    const resultado = regex.test(cep);
    if(!resultado) {
        return {valido: false, texto: "CEP inválido."};
    }
    return  { valido: true, texto: "" }
}