import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.guidi.dev.br/loteria',
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});