import {combineReducers} from 'redux';
import titlesReducer from './titlesReducer';
import articleReducer from './articleReducer';

export default combineReducers({
    titles: titlesReducer,
    article: articleReducer
});