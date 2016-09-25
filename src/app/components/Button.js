// Deps
import React, { Component, PropTypes } from 'react';

// App
// Style

class Button extends Component {
    render() {
        return (
            <div className="input-field btn">
                <a href="#" className="btn submit">{ this.props.name }</a>
            </div>            
        );        
    }
}

Button.propTypes = {
    submit: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}

export default Button;





