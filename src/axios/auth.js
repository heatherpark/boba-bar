import axios from 'axios';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty',
  params: {
    key: API_KEY
  }
});

export default instance;