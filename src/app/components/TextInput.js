// Deps
import React, { Component, PropTypes } from 'react';

// App
// Style
import '../../scss/input_field.scss';

class TextInput extends Component {

    constructor() {
        super();

        this.state = {
            label_active: '',
            text: '',
        };
    }

    onFocus() {
        this.setState({ label_active: 'active' });
    }

    onBlur() {
        
        if(this.state.text !== '') return;

        this.setState({ label_active: '' });
    }

    handleTextChange(e) {
        this.setState({ text: e.target.value });
        this.props.onChange(e.target.value);
    }

    render() {
        
        const { value, onChange } = this.props;

        return (
            <div className="input-field">
                <input type="text" 
                       onFocus={this.onFocus.bind(this)} 
                       onBlur={this.onBlur.bind(this)} 
                       value={value} 
                       onChange={this.handleTextChange.bind(this)} />
                <label className={this.state.label_active} htmlFor={ this.props.name }>{ this.props.name }</label>
            </div>
        );        
    }
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default TextInput;



