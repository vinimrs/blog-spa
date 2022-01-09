import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000'
});

export const busca = async (url, setDados) => {
    const resposta = await api.get(url);
    console.log(url);
    setDados(resposta.data);
};