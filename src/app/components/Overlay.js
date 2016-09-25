// Deps
import React, { Component } from 'react';

// App

// Style

class Overlay extends Component {
    render() {
        const classes = this.props.active ? 'overlay active' : 'overlay';
        return (
            <div className={classes} onClick={ this.props.onClick }></div>
        );        
    }
}

export default Overlay;
