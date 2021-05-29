import axios from 'axios';

export const getApiUrl = () => {
    return "http://apirestaurante2-001-site1.ftempurl.com";
}

export const getDadosRestaurante = () => {
    return axios.get(getApiUrl() + "/api/restaurante")
        .then(
            response => {
                return response.data;
            }
        )
}

export const getCardapio = () => {
    return axios.get(getApiUrl() + "/api/cardapio")
        .then(
            response => {
                return response.data;
            }
        )
}