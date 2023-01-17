import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducer';
//combine all the reducers
const rootReducer = combineReducers({
  userReducer,
});

//creating a store witht the help of middleware thunk
export const store = createStore(rootReducer, applyMiddleware(thunk));