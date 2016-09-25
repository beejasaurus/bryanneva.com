// Deps
import { combineReducers } from 'redux';

// App
import portfolio from './portfolio';
import contact from './contact';
import modal from './modal';

const reducers = combineReducers({
    portfolio,
    contact,
    modal,
});

export default reducers;