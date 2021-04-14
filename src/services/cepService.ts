import axios from 'axios';

const cepService = axios.create({
  baseURL: 'https://api.postmon.com.br/v1/cep/',

});

export default cepService;
