// Deps
import React, { Component, PropTypes } from 'react';

// App

// Style

class PortfolioCategoryFilter extends Component {

    render() {
        const { name, category_id, onClick, active, portfolio_filters } = this.props;
        return (
            <li className={ active }>
                <a href="#" 
                   className="portfolio-category-filter" 
                   onClick={e => { 
                        e.preventDefault();
                        onClick(name) 
                   }}>{ name }</a>
            </li>            
        );        
    }
}

PortfolioCategoryFilter.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    category_id: PropTypes.number.isRequired,
    active: PropTypes.string.isRequired,
}

export default PortfolioCategoryFilter;

