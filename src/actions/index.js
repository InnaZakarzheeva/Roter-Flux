import {getBreeds, search} from '../services/api/request';
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

export const searchByBreed = breed => dispatch => {
  dispatch({
    type: types.LOADING_DATA,
    searchName: breed,
  });
  search(breed)
    .then(payload => {
      dispatch({
        type: types.SEARCH_BY_BREED,
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

export const changeName = name => dispatch => {
  dispatch({
    type: types.CHANGE_NAME,
    name,
  });
};
