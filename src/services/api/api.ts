import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.pokemontcg.io/v2/',
  headers:  { 'X-Api-Key': '61f2e31c-37ae-426e-b6d7-5720a940fe9b' }
});

export default api;

