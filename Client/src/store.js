import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import Reducer from './reducers/game';


const rootReducer = combineReducers({
  form: formReducer,
  game: Reducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  )

export default store;