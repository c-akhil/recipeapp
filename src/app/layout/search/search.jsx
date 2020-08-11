import React from 'react';
import { withRouter } from 'react-router-dom';
import './search.css';
import recipelistreducer from '../../home/recipelistreducer';
import recipeListactions from '../../home/recipeListactions';
import { connect } from 'react-redux';

class SearchComponet extends React.Component {


    render() {
        return <React.Fragment>
            <div className="input-group mb-3 search-input-group">
                <div className="input-group-prepend">
                    <img className="search-icon" src={"assets/Icons/Icon feather-search.png"} />
                </div>
                <input type="text" className="search-input form-control" placeholder="Search your Favourite Recipe..."
                    value={this.props.home.searchField} onChange={(e) => { this.props.setSearchInput(e.target.value) }} />
            </div>
        </React.Fragment>
    }
}

export default connect(recipelistreducer, { ...recipeListactions })(withRouter(SearchComponet));