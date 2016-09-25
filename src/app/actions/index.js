// Deps
import fetch from 'isomorphic-fetch';
import { store } from '../store';

// Actions
export const SELECT_PROJECT_FILTER = 'SELECT_PROJECT_FILTER';
export const DESELECT_PROJECT_FILTER = 'DESELECT_PROJECT_FILTER';
export const OPEN_PROJECT = 'OPEN_PROJECT';
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export function selectProjectFilter(id) {
    return {
        type: SELECT_PROJECT_FILTER,
        id
    }
}

export function deselectProjectFilter(id) {
    return {
        type: DESELECT_PROJECT_FILTER,
        id
    }
}

export function openProject(id){
    return {
        type: OPEN_PROJECT,
        id
    }
}

function requestProjects() {
    return {
        type: REQUEST_PROJECTS
    }
}

function receiveProjects(projects) {
    return {
        type: RECEIVE_PROJECTS,
        projects
    }
}

export function fetchProjects() {
    return function(dispatch) {
        dispatch(requestProjects());

        return fetch(`/api/portfolio`)
            .then(response => response.json())
            .then(json => dispatch(receiveProjects(json)));
    }
}

function requestCategories() {
    return {
        type: REQUEST_CATEGORIES
    }
}

function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}

export function fetchCategories() {
    return function(dispatch) {
        dispatch(requestCategories());

        return fetch(`/api/categories`)
            .then(response => response.json())
            .then(json => dispatch(receiveCategories(json)));
    }
}