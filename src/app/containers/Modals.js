// Deps
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { store } from '../store';

// App
import { closeModal } from '../actions';
import Modal from '../components/Modal';
import Overlay from '../components/Overlay';

// Style

class Modals extends Component {
    render() {
        const classes = this.props.open ? 'modal-container active' : 'modal-container'
        return (
            <div className={classes}>
                <Overlay active={true} onClick={ this.props.onDismiss } />
                <Modal title="Foo" onDismiss={ this.props.onDismiss } />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        open: state.modal.open,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDismiss: (id) => {
            store.dispatch(closeModal());            
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modals);