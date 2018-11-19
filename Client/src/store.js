import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import {reducer as formReducer} from 'redux-form';
import {userReducer} from './reducers/users';
// const rootReducer = combineReducers({
//   form: formReducer
// })

const store = createStore(
  combineReducers({
    userReducer
  }),
    applyMiddleware(thunk)
  );

export default store;