import {FETCH_TITLES} from '../actions/types';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_TITLES:
            return action.payload;
        default:
            return state;
    }
}