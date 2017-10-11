import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  posts: require('./posts').default
});

export default rootReducer;
