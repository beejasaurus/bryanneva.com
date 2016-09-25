// Deps
import React, { Component } from 'react';

// App

// Style
import '../../scss/back.scss';

class BackToTop extends Component {
    render() {
        return (
            <div className="back-to-top">
                <a href="#">Back to top <i className="fa fa-level-up" aria-hidden="true"></i></a>
            </div>
        );        
    }
}

export default BackToTop;
