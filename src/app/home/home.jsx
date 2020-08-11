import React from 'react';
import httpSevice from '../utill/httpservice';
import apiendpoints from '../utill/apiendpoints';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import recipeListactions from "./recipeListactions";
import recipelistreducer from './recipelistreducer';
import "./home.scss";
import CardComponet from "./card/card.jsx";

class HomeComponet extends React.Component {

    state = {

    };
    componentDidMount() {

    }


    componentDidUpdate(prevProp) {

    }

    navigateToReceipeDetails(recipe) {
        this.props.setRecipeDetails(recipe);
        this.props.history.push('/' + recipe.id)
    }

    markSearchInput(text, searchInput) {
        if (!searchInput) return text;
        return <span>{text.split(new RegExp("(" + searchInput + ")", 'gi')).map(t => t.toLowerCase() === searchInput.toLowerCase() ? <b>{t}</b> : t)}</span>;
    }

    render() {
        const searchInput = this.props?.home?.searchField;
        let recipeListUI = [...this.props?.home?.recipeList].filter((rec) => {
            if (!this.props?.home?.searchField?.length) return true;
            else return new RegExp("(" + searchInput + ")", 'gi').test(rec.name) || new RegExp("(" + searchInput + ")", 'gi').test(rec.description) || new RegExp(this.props.home.searchField).test(rec.category)
        }).map((recipe, index) => {
            return <CardComponet key={index + "Card"} recipe={recipe}></CardComponet>
        });
        return <React.Fragment>
            <div className="card-columns">
                {recipeListUI}
            </div>
        </React.Fragment>
    }
}

export default connect(recipelistreducer, { ...recipeListactions })(withRouter(HomeComponet));