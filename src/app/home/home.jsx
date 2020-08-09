import React from 'react';
import httpSevice from '../utill/httpservice';
import apiendpoints from '../utill/apiendpoints';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import recipeListactions from "./recipeListactions";
import recipelistreducer from './recipelistreducer';
import "./home.scss";

class HomeComponet extends React.Component {

    state = {

    };
    componentDidMount() {

    }


    componentDidUpdate(prevProp) {

    }

    navigateToReceipeDetails(recipe){
        this.props.setRecipeDetails(recipe);
        this.props.history.push('/'+recipe.id)
    }

    render() {
        // "id":0,
        // "name":"Uthappizza",
        // "image":"https://i.imgur.com/tDnjTXf.jpg",
        // "category":"mains",
        // "label":"Hot",
        // "price":"4.99",
        // "description":"A unique combination of Indian Uthappam (pancake) and Italian pizza"


        let recipeListUI = [...this.props?.home?.recipeList].map((recipe, index) => {
            return <React.Fragment key={"recepeList" + index}>
                <div className="card" style={{ "backgroundImage": `url(${recipe.image})` }}>
                    {recipe.category && <span className="category">In {recipe.category}</span>}
                    <div className="card-container">

                        <div className="card-header" >
                            <div className="display-on-hover">
                                <button type="button" onClick={()=>{this.navigateToReceipeDetails(recipe)}} class="btn hover-btn btn-lg btn-block">View More</button>
                                <button type="button" onClick={()=>{this.navigateToReceipeDetails(recipe)}} class="btn hover-btn btn-lg btn-block">Quick View</button>
                            </div>
                        </div>
                        <div className={"card-body text-left " + (index % 2 == 0 ? 'card-body-even' : 'card-body-odd')}>
                            <div className="row">
                                <h5 className="col-10 card-title">{recipe.name}</h5>
                                <img className="heart-icon" onClick={() => {
                                    let recipeList = this.props.home.recipeList;
                                    recipeList[index].isFavourite = !recipeList[index].isFavourite;
                                    this.props.setRecipeList(recipeList);
                                }} src={recipe.isFavourite ? "/assets/Icons/Icon feather-heart.png" : "/assets/Icons/Icon feather-heart-color.png"} />
                            </div>
                            <p>
                                <img className="clock-icon" src="/assets/Icons/Icon feather-clock.png" />
                                {recipe.duration + " min"}
                            </p>
                            <p className="card-text">{recipe.description}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        });
        return <React.Fragment>
            <div className="card-columns">
                {recipeListUI}
            </div>
        </React.Fragment>
    }
}

export default connect(recipelistreducer, { ...recipeListactions })(withRouter(HomeComponet));