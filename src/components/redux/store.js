import { createStore } from 'redux'
import { usersReducer } from './reducers/usersReducer';

let store = createStore(usersReducer);
export default store;
