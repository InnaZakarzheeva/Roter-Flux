import axios from 'axios';
import {THE_CAT_API} from '../../config/constants';

export const getBreeds = page => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${THE_CAT_API}/breeds`, {
        params: {
          page,
          limit: 10,
        },
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(error => {
        console.log('Error: ', error);
        reject(error);
      });
  });
};

export const search = breed => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${THE_CAT_API}/breeds/search`, {
        params: {
          q: breed,
        },
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(error => {
        console.log('Error serch: ', error.message);
        reject(error);
      });
  });
};
