// Deps
import React, { Component, PropTypes } from 'react';

// App
import Chip from './Chip';

// Style

class PortfolioCard extends Component {
    render() {
        const { categories, id, name, description, actions } = this.props;
        return (
            <div className="portfolio-item">
                    
                <div className="portfolio-image">
                    <img src="http://lorempixel.com/100/240/nature" alt="portfolio-img" />
                </div>
                
                <div className="portfolio-header">
                    <h3 onClick={ this.props.onClick.bind(this,id) }>{name}</h3>
                </div>                

                <div className="portfolio-categories">
                    { categories.map((category,index) => {return <Chip name={category} key={index} id={index} />})}
                </div>

                <div className="portfolio-description">
                    <p>
                        {description}
                    </p>
                </div>
                <div className="portfolio-actions">
                    <ul>
                        { actions.map((action,index) => {
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
    onClick: PropTypes.func,
}

export default PortfolioCard;

