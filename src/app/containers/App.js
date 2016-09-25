// Deps
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { store } from '../store';

// App
import { openProject } from '../actions';
import Portfolio from './Portfolio';
import Contact from './Contact';
import BackToTop from '../components/BackToTop';
import Toasts from './Toasts';
import Modals from './Modals';

export default class App extends Component {
    render() {
        
        return (
            <section className="container">
                <Portfolio />
                <BackToTop />
                <Contact />                
                <BackToTop />
                <Toasts />
                <Modals />
            </section>
        )
    }
}