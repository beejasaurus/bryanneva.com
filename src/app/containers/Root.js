// Deps
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// App
import App from './App';
import { store } from '../store';
import { fetchProjects } from '../actions';

// Style
import '../../scss/layout.scss';
import '../../scss/forms.scss';

store.dispatch(fetchProjects());

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}