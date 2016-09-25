// Deps
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// App
import Root from './app/containers/Root';

// Styles
import './scss/index.scss';

ReactDom.render(<Root />, document.getElementById('root'));
