import {getBreeds} from '../apiRequest';
import {types} from './types/index';

export const loadBreeds = () => dispatch => {
  getBreeds()
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
