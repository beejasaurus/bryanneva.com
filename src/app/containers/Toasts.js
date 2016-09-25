// Deps
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { store } from '../store';

// App
import Toast from '../components/Toast';

// Style

class Toasts extends Component {
    render() {
        const { toasts } = this.props;
        return (
            <div className="toast-container">
                { toasts.map((toast,index) => { return <Toast key={index} message={toast.message} /> })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('- Toasts', state.contact.toasts);
    return {
        toasts: state.contact.toasts,
    }
}

export default connect(mapStateToProps)(Toasts);