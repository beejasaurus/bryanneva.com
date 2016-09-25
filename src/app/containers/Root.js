// Deps
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// App
import App from './App';
import { store } from '../store';
import { fetchProjects, fetchCategories } from '../actions';

// Style
import '../../scss/layout.scss';
import '../../scss/forms.scss';

store.dispatch(fetchProjects());
store.dispatch(fetchCategories());

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}