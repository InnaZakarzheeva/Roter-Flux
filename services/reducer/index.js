import {types} from '../actions/types/index';

const initialState = {
  name: 'Name',
  breeds: [],
  isLoading: true,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_NAME:
      return {
        ...state,
        name: action.name,
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
      };
    default:
      return state;
  }
};

export default reducer;
