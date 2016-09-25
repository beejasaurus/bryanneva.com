// Deps
import React, { Component, PropTypes } from 'react';

// App
// Style

class Toast extends Component {
    render() {
        return (
            <div className="toast">
                <span>{this.props.message}</span>
            </div>  
        );        
    }
}

Toast.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Toast;