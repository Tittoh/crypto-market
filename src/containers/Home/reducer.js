// Responsible for updating the store without mutating it.
import { FETCH_TOP_10_SUCCESS, FETCH_TOP_10_FAILURE, FETCH_TOP_10_REQUEST } from './constants';

const initialState = {
  payload: {},
  isFetching: false,
  success: false,
  failure: false,
  errors: null,
};

export default (state = initialState, action,) => {
  const { payload, errors } = action;
  switch (action.type) {
    case FETCH_TOP_10_SUCCESS:
      return {
        ...state,
        payload,
        errors: null,
        success: true,
        failure: false,
        isFetching: false,
      };
    case FETCH_TOP_10_FAILURE:
      return {
        ...state,
        errors,
        payload: '',
        failure: true,
        success: false,
        isFetching: false,
      };
    case FETCH_TOP_10_REQUEST:
        return {
          ...state,
          errors: null,
          payload: {},
          failure: false,
          success: false,
          isFetching: true,
        };
    default:
      return state;
  }
};
