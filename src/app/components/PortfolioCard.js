// Deps
import React, { Component, PropTypes } from 'react';

// App
import Chip from './Chip';

// Style

class PortfolioCard extends Component {
    render() {
        return (
            <div className="portfolio-item">
                    
                <div className="portfolio-image">
                    <img src="http://lorempixel.com/100/240/nature/6/" alt="portfolio-img" />
                </div>
                <div className="portfolio-categories">
                    { this.props.categories.map((category,index) => {
                        return <Chip name={category} key={index} />
                    })}
                </div>
                <div className="portfolio-header">
                    <h3>{ this.props.name }</h3>
                </div>                
                <div className="portfolio-description">
                    <p>
                        { this.props.description}
                    </p>
                </div>
                <div className="portfolio-actions">
                    <ul>
                        { this.props.actions.map((action,index) => {
                            return <li key={index}><a href="#">{ action }</a></li>
                        })}
                    </ul>
                    
                </div>
            </div>
        );        
    }
}

PortfolioCard.propTypes = {
    name: PropTypes.string.isRequired,
    categories: PropTypes.array,
    description: PropTypes.string,
}

export default PortfolioCard;

