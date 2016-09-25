// Deps
import React, { Component, PropTypes } from 'react';

// App
// Style

class Modal extends Component {
    render() {
        const { title, body, onDismiss } = this.props;
        return (
            <div className="modal">
                <div className="modal-content">
                    <h4>{title}</h4>
                    <p>{body}</p>            
                </div>

                <div className="modal-footer">
                    <a href="#" className="modal-action modal-close" onClick={e => { 
                        e.preventDefault();
                        onDismiss() 
                    }}>OK</a>
                </div>        
            </div>
        );        
    }
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired,
}

export default Modal;