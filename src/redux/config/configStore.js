import { createStore } from 'redux';
import { combineReducers } from 'redux';
import setComment from '../modules/comments';
import selectMember from '../modules/selectMember';

const rootReducer = combineReducers({ setComment, selectMember });
const store = createStore(rootReducer);
export default store;
