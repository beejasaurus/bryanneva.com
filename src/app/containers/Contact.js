// Deps
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { store } from '../store';

// App
import { openProject } from '../actions';
import SectionHeader from '../components/SectionHeader';
import TextInput from '../components/TextInput';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import AboutMe from './AboutMe';

// Style
import '../../scss/contact.scss';

export default class Contact extends Component {
    render() {

        return (
            <section className="contact" id="contact">
                <SectionHeader name="Contact" />    

                <section>
                    <TextInput name="Name" />
                    <TextInput name="Email" />
                    <Textarea name="Message" />
                    <Button submit={true} name="Send" />
                </section>

                <section>&nbsp;</section>
                
                <AboutMe />
            </section>
        )
    }
}