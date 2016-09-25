// Deps
import { combineReducers } from 'redux';

// App
import {
    EDIT_NAME,
    EDIT_EMAIL,
    EDIT_MESSAGE,
    POST_MESSAGE,
    SEND_TOAST,
    REMOVE_TOAST,
} from '../actions';

const contact = (state = { sending: false, toasts: [], status: '', name: '', email: '', message: '' }, action) => {
    
    switch (action.type) {
        case EDIT_NAME:
            return Object.assign({}, state, {
                name: action.text,
            });
        case EDIT_EMAIL:
            return Object.assign({}, state, {
                email: action.text,
            });
        case EDIT_MESSAGE:
            return Object.assign({}, state, {
                message: action.text,
            });
        case POST_MESSAGE:
            return Object.assign({}, state, {
                sending: true,
            });
        case SEND_TOAST:
            return Object.assign({}, state, {
                sending: false,
                status: action.json,
                toasts: [...state.toasts, action.json],
                name: '',
                email: '',
                message: '',
            });
        case REMOVE_TOAST:
            return Object.assign({}, state, {
                toasts: [...state.toasts.splice(1)],
            });
        default:
            return state;
    }
}

export default contact;