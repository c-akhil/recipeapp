import React from 'react';
import httpSevice from '../../utill/httpservice';
import apiendpoints from '../../utill/apiendpoints';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import recipeListactions from "./../recipeListactions";
import recipelistreducer from './../recipelistreducer';
import "./card.scss";

class CardComponet extends React.Component {

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
        return <span>{text.split(new RegExp("(" + searchInput + ")", 'gi')).map((t,i) => t.toLowerCase() === searchInput.toLowerCase() ? <b key={i+"s"}>{t}</b> : t)}</span>;
    }

    render() {
        const searchInput = this.props?.home?.searchField;
        const { recipe, index } = this.props;
        return <React.Fragment>
            <div className="card" style={{ "backgroundImage": `url(${recipe.image})` }}>
                {recipe.category && <span className="category">In {this.markSearchInput(recipe.category, searchInput)}</span>}
                <div className="card-container">

                    <div className="card-header">
                        <div className="display-on-hover">
                            <button type="button" onClick={() => { this.navigateToReceipeDetails(recipe); }} className="btn hover-btn btn-lg btn-block">View More</button>
                            <button type="button" onClick={() => { this.navigateToReceipeDetails(recipe); }} className="btn hover-btn btn-lg btn-block">Quick View</button>
                        </div>
                    </div>
                    <div className={"card-body text-left " + (index % 2 == 0 ? 'card-body-even' : 'card-body-odd')}>
                        <div className="row">
                            <h5 className="col-10 card-title">{this.markSearchInput(recipe.name, searchInput)}</h5>
                            <img className="heart-icon" onClick={() => {
                                let recipeList = this.props.home.recipeList;
                                let re = recipeList.find((r) => recipe.id === r.id);
                                re.isFavourite = !re.isFavourite;
                                this.props.setRecipeList(recipeList);
                            }} src={recipe.isFavourite ? "/assets/Icons/Icon feather-heart.png" : "/assets/Icons/Icon feather-heart-color.png"} />
                        </div>
                        <p>
                            <img className="clock-icon" src="/assets/Icons/Icon feather-clock.png" />
                            {recipe.duration + " min"}
                        </p>
                        <p className="card-text">{this.markSearchInput(recipe.description, searchInput)}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default connect(recipelistreducer, { ...recipeListactions })(withRouter(CardComponet));