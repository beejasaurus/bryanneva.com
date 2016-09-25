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
        const { onSelect,onDeselect,filters,projects } = this.props;
        const categoryFilters = ['PHP','JavaScript','Design','MySQL'];
        // const projects = [
        //     { name: 'Project title 1', categories: ['PHP','JS'], description: 'Foo bar baz', actions: ['Site','Code']},
        //     { name: 'Project title 2', categories: ['PHP','MySQL'], description: 'Foo bar baz', actions: ['Code','Screenshot']}
        // ]
        
        return (
            <section className="portfolio" id="portfolio">
                <SectionHeader name="Portfolio" />
                
                <div className="portfolio-selected-categories">
                    <Chip name="PHP" dismissible={ true } />
                    <Chip name="JS" dismissible={true} />                        
                </div>

                <nav className="portfolio-categories">
                    <ul>
                        { categoryFilters.map((category,index) => {
                            const active = filters.indexOf(index) !== -1;
                            return <PortfolioCategoryFilter key={ index } 
                                                            category_id={index} 
                                                            name={ category } 
                                                            active={ active ? 'active' : '' } 
                                                            onClick={ active ? onDeselect : onSelect } />
                        })}
                    </ul>
                </nav>

                <section className="portfolio-items">
                    { projects.map((project,index) => {
                        return <PortfolioCard key={ index }
                                              name={ project.title } 
                                              categories={ project.field_technology_category.split(',') } 
                                              description={ project.field_description }
                                              actions={ project.field_actions.split(',') } />
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
        filters: state.portfolio.filters,
        selectedProject: state.portfolio.selectedProject,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelect: (id) => {
            store.dispatch(selectProjectFilter(id));            
        },

        onDeselect: (id) => {
            store.dispatch(deselectProjectFilter(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);