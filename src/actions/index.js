import {getBreeds} from '../services/api/request';
import {types} from './types/index';

let page = 0;

export const loadBreeds = () => dispatch => {
  page++;
  getBreeds(page)
    .then(payload => {
      dispatch({
        type: types.SUCCESSFUL_LOAD_DATA,
        payload,
      });
    })
    .catch(error => {
      dispatch({
        type: types.ERROR_LOAD_DATA,
        error,
      });
    });
};
