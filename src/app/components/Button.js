// Deps
import React, { Component, PropTypes } from 'react';

// App
// Style

class Button extends Component {
    render() {
        const { data, onClick } = this.props;
        return (
            <div className="input-field btn">
                <a href="#" 
                   className="btn submit" 
                   onClick={e => {
                        e.preventDefault();
                        onClick(data); }}>
                    { this.props.name }
                </a>
            </div>            
        );        
    }
}

Button.propTypes = {
    submit: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Button;





