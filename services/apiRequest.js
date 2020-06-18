import axios from 'axios';

export const getBreeds = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://api.thecatapi.com/v1/breeds')
      .then(resp => {
        resolve(resp.data);
      })
      .catch(error => {
        console.log('Error: ', error);
        reject(error);
      });
  });
};
