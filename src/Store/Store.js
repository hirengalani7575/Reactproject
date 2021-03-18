import {createStore} from 'redux';
import rootReducer from '../Reducers';

export default function storeData(initialState) {
  return createStore(rootReducer, initialState);
}