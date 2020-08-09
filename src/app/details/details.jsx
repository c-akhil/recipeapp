import React from 'react';
import httpSevice from '../utill/httpservice';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import recipeListactions from "./../home/recipeListactions";
import recipelistreducer from './../home/recipelistreducer';

class DetailsComponent extends React.Component {

    state = {

    };


    componentWillMount() {
        // if (this.props?.home?.recipeList?.length &&
        //     this.props.match?.params?.id != prevProp?.match?.params?.id) {
            let recepe = this.props?.home?.recipeList?.find(rec => rec.id == this.props.match.params.id);
            console.log(recepe,"recepe")
            this.props.setRecipeDetails(recepe)
        // }
    }


    render() {

        console.log(this.props)
        return <React.Fragment>
            DetailsComponent
        </React.Fragment>
    }
}

export default connect(recipelistreducer, { ...recipeListactions })(withRouter(DetailsComponent));