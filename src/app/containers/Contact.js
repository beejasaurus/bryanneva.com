// Deps
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { store } from '../store';

// App
import { editName, editEmail, editMessage, sendMessage } from '../actions';
import SectionHeader from '../components/SectionHeader';
import TextInput from '../components/TextInput';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import AboutMe from './AboutMe';

// Style
import '../../scss/contact.scss';

class Contact extends Component {
    render() {

        const { 
            name, 
            email, 
            message, 
            data, 
            sending, 
            status, 
            onChangeName, 
            onChangeEmail, 
            onChangeMessage, 
            onSend, 
        } = this.props;
        
        return (
            <section className="contact" id="contact">
                <SectionHeader name="Contact" />    

                <section>
                    <TextInput name="Name" value={name} onChange={onChangeName} />
                    <TextInput name="Email" value={email} onChange={onChangeEmail} />
                    <Textarea name="Message" value={message} onChange={onChangeMessage} />
                    <Button submit={true} name="Send" data={data} onClick={onSend} />
                </section>

                <section>&nbsp;</section>
                
                <AboutMe />
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        name: state.contact.name,
        email: state.contact.email,
        message: state.contact.message,
        sending: state.contact.sending,
        status: state.contact.status,
        data: {
            name: state.contact.name,
            email: state.contact.email,
            message: state.contact.message,
        },
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeName: (text) => {
            store.dispatch(editName(text));
        },

        onChangeEmail: (text) => {
            store.dispatch(editEmail(text));
        },

        onChangeMessage: (text) => {
            store.dispatch(editMessage(text));
        },

        onSend: (data) => {
            store.dispatch(sendMessage(data));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);