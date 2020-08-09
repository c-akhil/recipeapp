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
        httpSevice.get(apiendpoints.GET_RECIPE_LIST).then((response) => {
            let recipeList = response.data;
            this.props.setRecipeList(recipeList);
        })
    }


    componentDidUpdate(prevProp) {

    }


    render() {
        // "id":0,
        // "name":"Uthappizza",
        // "image":"https://i.imgur.com/tDnjTXf.jpg",
        // "category":"mains",
        // "label":"Hot",
        // "price":"4.99",
        // "description":"A unique combination of Indian Uthappam (pancake) and Italian pizza"


        let recipeListUI = [...this.props?.home?.recipeList].map((recipe, index) => <React.Fragment key={"recepeList" + index}>
            <div className="card" style={{ "background-image": `url(${recipe.image})`}}>
                {recipe.category && <span className="category">In {recipe.category}</span>}
                {/* <img className="card-img-top" src={recipe.image} alt={recipe.name} />
                 */}
                <div class="card-header" >
                    
                </div>
                <div className={"card-body " + (index % 2 == 0 ? 'card-body-even' : 'card-body-odd')}>
                    <h5 className="card-title">{recipe.name}</h5>
                    <p className="card-text">{recipe.description}</p>
                </div>
            </div>

        </React.Fragment>);
        return <React.Fragment>
            <div className="card-columns">
                {recipeListUI}
            </div>
        </React.Fragment>
    }
}

export default connect(recipelistreducer, { ...recipeListactions })(withRouter(HomeComponet));