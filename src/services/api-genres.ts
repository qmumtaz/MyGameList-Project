import axios from 'axios';

const apiGenres = axios.create({
  baseURL: 'https://localhost:7044/', // Replace this with the actual base URL of your API
});

export default apiGenres;
