import React from 'react';
import httpSevice from '../utill/httpservice';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import recipeListactions from "./../home/recipeListactions";
import recipelistreducer from './../home/recipelistreducer';

class DetailsComponent extends React.Component {

    state = {

    };


    componentDidUpdate(prevProp) {

    }


    render() {
        return <React.Fragment>
            DetailsComponent
        </React.Fragment>
    }
}

export default connect(recipelistreducer, { ...recipeListactions })(withRouter(DetailsComponent));