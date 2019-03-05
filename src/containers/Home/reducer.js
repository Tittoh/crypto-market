// Responsible for updating the store without mutating it.
import { GREET } from './constants';

const initialState = {
  greetings: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GREET:
      return { ...state, greetings: 'This is the beginning of nothingness' };
    default:
      return state;
  }
};
