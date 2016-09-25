// Deps
import { combineReducers } from 'redux';

// App
import {
    REQUEST_PROJECTS,
    RECEIVE_PROJECTS,
    REQUEST_CATEGORIES,
    RECEIVE_CATEGORIES,
    SELECT_PROJECT_FILTER,
    DESELECT_PROJECT_FILTER,
    OPEN_PROJECT,
} from '../actions';

const portfolio = (state = { fetching: false, projects: [], categories: [], selectedProject: false, filters: [] }, action) => {
    
    switch (action.type) {
        case REQUEST_PROJECTS:
            return Object.assign({}, state, {
                fetching: true,
            });
        case RECEIVE_PROJECTS:
            return Object.assign({}, state, {
                fetching: false,
                projects: action.projects
            });
        case REQUEST_CATEGORIES:
            return Object.assign({}, state, {
                fetching: true,
            });
        case RECEIVE_CATEGORIES:
            return Object.assign({}, state, {
                fetching: false,
                categories: action.categories
            });
        case SELECT_PROJECT_FILTER:
            return Object.assign({}, state, {
                filters: [...state.filters, action.id],
            });

        case DESELECT_PROJECT_FILTER:
            const reducedFilter = state.filters.filter((item) => {
                return item !== action.id;
            });

            return Object.assign({}, state, {
                filters: reducedFilter,
            });

        case OPEN_PROJECT:
            return Object.assign({}, state, {
                selectedProject: action.id
            });
        default:
            return state;
    }
}

export default portfolio;