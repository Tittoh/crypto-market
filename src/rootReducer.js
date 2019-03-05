import { combineReducers } from 'redux';

import message from './containers/Home/reducer';

const rootReducer = combineReducers({ message });

export default rootReducer;