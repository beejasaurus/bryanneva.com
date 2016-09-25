// Deps
import { combineReducers } from 'redux';

// App
import {
    OPEN_MODAL,
    CLOSE_MODAL,
} from '../actions';

const portfolio = (state = { open: false }, action) => {
    
    switch (action.type) {
        case OPEN_MODAL:
            return Object.assign({}, state, {
                open: true,
            });
        case CLOSE_MODAL:
            return Object.assign({}, state, {
                open: false,
            });
        default:
            return state;
    }
}

export default portfolio;