import axios from 'axios';

export const getBreeds = page => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://api.thecatapi.com/v1/breeds', {
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
