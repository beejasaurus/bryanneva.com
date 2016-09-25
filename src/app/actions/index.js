// Deps
import fetch from 'isomorphic-fetch';
import { store } from '../store';

// Actions
export const SELECT_PROJECT_FILTER = 'SELECT_PROJECT_FILTER';
export const DESELECT_PROJECT_FILTER = 'DESELECT_PROJECT_FILTER';
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const OPEN_PROJECT = 'OPEN_PROJECT';
export const EDIT_NAME = 'EDIT_NAME';
export const EDIT_EMAIL = 'EDIT_EMAIL';
export const EDIT_MESSAGE = 'EDIT_MESSAGE';
export const POST_MESSAGE = 'POST_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SEND_TOAST = 'SEND_TOAST';
export const REMOVE_TOAST = 'REMOVE_TOAST';

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

export function openProject(id){
    return [{
        type: OPEN_PROJECT,
        id,
    },{
        type: OPEN_MODAL,
        reducer: 'portfolio',
        id,
    }];
}

export function editName(text){
    return {
        type: EDIT_NAME,
        text
    }
}

export function editEmail(text){
    return {
        type: EDIT_EMAIL,
        text
    }
}

export function editMessage(text){
    return {
        type: EDIT_MESSAGE,
        text
    }
}

function postMessage(){
    return {
        type: POST_MESSAGE,
    }
}

function receiveMessage(json){
    store.dispatch(sendToast(json));

    setTimeout(() => {
        store.dispatch(removeToast());
    }, 3000)
}

export function sendMessage(message){
    return function(dispatch) {
        // return fetch(`/api/messages`, { method: 'POST', body: 'foo' })
        //     .then(response => response.json())
        //     .then(json => dispatch(receiveMessage(json)));
        dispatch(postMessage());
        receiveMessage({ message: 'Sent' });        
    }
}

export function openModal() {
    return {
        type: OPEN_MODAL,
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL,
    }
}

function sendToast(json){
    console.log('- sendToast');
    return {
        type: SEND_TOAST,
        json
    }
}

function removeToast(){
    console.log('- removeToast');
    return {
        type: REMOVE_TOAST
    }
}
