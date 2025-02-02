import axios from 'axios';

const api = axios.create({
  baseURL: 'https://back-prueba-tau.vercel.app/api/donantes', // Asegúrate de que el backend esté corriendo en este puerto
});

export default api;
