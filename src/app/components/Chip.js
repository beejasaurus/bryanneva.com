// Deps
import React, { Component, PropTypes } from 'react';

// App
// Style

class Chip extends Component {
    render() {
        const { dismissible } = this.props;
        const icon = dismissible ? <i className="close fa fa-times"></i> : '';
        return (
            <div className="chip">
                { this.props.name }
                { icon }
            </div>        
        );        
    }
}

Chip.propTypes = {
    name: PropTypes.string.isRequired,
    dismissible: PropTypes.bool
}

export default Chip;