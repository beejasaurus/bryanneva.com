// Deps
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { store } from '../store';

// App
import { 
    selectProjectFilter, 
    deselectProjectFilter, 
    openProject 
} from '../actions';
import SectionHeader from '../components/SectionHeader';
import Chip from '../components/Chip';
import PortfolioCard from '../components/PortfolioCard';
import PortfolioCategoryFilter from '../components/PortfolioCategoryFilter';

class Portfolio extends Component {
    render() {
        const { onSelect, onDeselect, onSelectProject, filters, projects, categories } = this.props;
        return (
            <section className="portfolio" id="portfolio">
                <SectionHeader name="Portfolio" />
                
                <div className="portfolio-selected-categories">
                    { filters.map((filter,index) => { 
                        return <Chip key={index}
                                     id={index} 
                                     name={filter} 
                                     dismissible={true} 
                                     onDismiss={ onDeselect } /> 
                    })}
                </div>

                <nav className="portfolio-categories">
                    <ul>
                        { categories.map((category,index) => {
                            const active = filters.indexOf(category.name) !== -1;
                            return <PortfolioCategoryFilter key={ index } 
                                                            category_id={index} 
                                                            name={ category.name } 
                                                            active={ active ? 'active' : '' } 
                                                            onClick={ active ? onDeselect : onSelect } />
                        })}
                    </ul>
                </nav>

                <section className="portfolio-items">
                    { projects.filter((project,index) => {
                        
                        if(filters.length === 0) return project;

                        return project.field_technology_categories.split(',').every(category => filters.indexOf(category) > -1);
                    }).map((project,index) => {
                        return <PortfolioCard key={ index }
                                              name={ project.title } 
                                              categories={ project.field_technology_categories.split(',') } 
                                              description={ project.field_description }
                                              actions={ project.field_actions.split(',') }
                                              onClick={ onSelectProject } />
                    })}
                </section>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fetching: state.portfolio.fetching,
        projects: state.portfolio.projects,
        categories: state.portfolio.categories,
        filters: state.portfolio.filters,
        selectedProject: state.portfolio.selectedProject,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelect: (filter) => {
            store.dispatch(selectProjectFilter(filter));            
        },

        onDeselect: (filter) => {
            store.dispatch(deselectProjectFilter(filter));
        },

        onSelectProject: () => {
            store.dispatch(openProject(1));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);