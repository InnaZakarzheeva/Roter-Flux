import {types} from '../actions/types/index';

const initialState = {
  name: 'Name',
  breeds: [],
  searchPayload: [],
  isLoading: false,
  isError: false,
  searchName: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_NAME:
      return {
        ...state,
        name: action.name,
      };

    case types.LOADING_DATA:
      return {
        ...state,
        isLoading: true,
        searchName: action.breed,
      };

    case types.SUCCESSFUL_LOAD_DATA:
      return {
        ...state,
        breeds: [...state.breeds, ...action.payload],
        isLoading: false,
      };

    case types.ERROR_LOAD_DATA:
      console.error('GET BREEDS: ', action.error.message);
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case types.SEARCH_BY_BREED:
      return {
        ...state,
        searchPayload: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
