// Deps
import React, { Component, PropTypes } from 'react';

// App

// Style
import '../../scss/input_field.scss';

class Textarea extends Component {
    render() {
        return (
            <div className="input-field textarea">
                <textarea name={ this.props.name.toLowerCase() } id={ this.props.name.toLowerCase() }></textarea>
                <label className='material-label' htmlFor={ this.props.name.toLowerCase() }>{ this.props.name }</label>
            </div>
        );        
    }
}

Textarea.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Textarea;



