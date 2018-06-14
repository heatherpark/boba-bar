import axios from 'axios';
import { FIREBASE_AUTH } from '../config/client';

const { API_KEY } = FIREBASE_AUTH;

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty',
  params: {
    key: API_KEY
  }
});

export default instance;