// Deps
import React, { Component, PropTypes } from 'react';

// App

// Style
import '../../scss/input_field.scss';

class Textarea extends Component {
    
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
        const { name, value } = this.props;
        const { label_active } = this.state;
        
        return (
            <div className="input-field textarea">
                <textarea name={ name.toLowerCase() } 
                          id={ name.toLowerCase() } 
                          value={ value }
                          onFocus={this.onFocus.bind(this)} 
                          onBlur={this.onBlur.bind(this)}
                          onChange={this.handleTextChange.bind(this)}></textarea>
                <label className={ label_active } htmlFor={ name.toLowerCase() }>{ name }</label>
            </div>
        );        
    }
}

Textarea.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Textarea;



