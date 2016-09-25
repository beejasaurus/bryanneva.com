// Deps
import React, { Component } from 'react';

// App
// Style
import '../../scss/social_icons.scss';

class SocialIcons extends Component {
    render() {
        return (
            <ul className="social-icons">
                <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
            </ul>            
        );        
    }
}

export default SocialIcons;

