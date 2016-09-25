// Deps
import React, { Component, PropTypes } from 'react';

// App
// Style
import '../../scss/input_field.scss';

class TextInput extends Component {
    render() {
        return (
            <div className="input-field">
                <input type="text" />
                <label className='material-label' htmlFor={ this.props.name }>{ this.props.name }</label>
            </div>
        );        
    }
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
}

export default TextInput;



