// Deps
import React, { Component, PropTypes } from 'react';

// App

// Style
import '../../scss/sub_nav.scss';

class SectionHeader extends Component {
    render() {
        return (
            <header>
                <h2>
                    { this.props.name }
                    <nav className="sub-nav">
                        <ul>
                            <li className={ this.props.name === 'Portfolio' ? 'disabled' : '' }><a href="#portfolio">Portfolio</a></li>
                            <li className={ this.props.name === 'Contact' ? 'disabled' : '' }><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </h2>
            </header>    
        );        
    }
}

SectionHeader.propTypes = {
    name: PropTypes.string.isRequired,
}

export default SectionHeader;