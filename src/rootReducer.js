import { combineReducers } from 'redux';

import coins from './containers/Home/reducer';

const rootReducer = combineReducers({ coins });

export default rootReducer;