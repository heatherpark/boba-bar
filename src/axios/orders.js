import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://boba-bar.firebaseio.com/'
});

export default instance;