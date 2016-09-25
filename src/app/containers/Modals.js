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
        const { open, data } = this.props;
        const classes = open ? 'modal-container active' : 'modal-container'

        return (
            <div className={classes}>
                <Overlay active={true} onClick={ this.props.onDismiss } />
                <Modal title={ data.title } body={ data.field_description } onDismiss={ this.props.onDismiss } />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const data = state.modal.reducer ? state[state.modal.reducer].selected : false;

    return {
        open: state.modal.open,
        data: data
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