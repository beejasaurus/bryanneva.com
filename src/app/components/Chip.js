// Deps
import React, { Component, PropTypes } from 'react';

// App
// Style

class Chip extends Component {
    render() {
        const { name, dismissible, onDismiss, id } = this.props;
        const icon = dismissible ? <i onClick={e => { onDismiss(name) }} className="close fa fa-times"></i> : '';
        return (
            <div className="chip">
                { name }
                { icon }
            </div>        
        );        
    }
}

Chip.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    dismissible: PropTypes.bool,
    onDismiss: PropTypes.func
}

export default Chip;