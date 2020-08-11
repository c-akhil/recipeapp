import React from 'react';
import { withRouter } from 'react-router-dom';
import './layout.css';
import recipelistreducer from '../home/recipelistreducer';
import recipeListactions from '../home/recipeListactions';
import { connect } from 'react-redux';
import SearchComponet from "./search/search";

class LayoutComponet extends React.Component {


    render() {
        return <React.Fragment>

            <div className=" bg-image">

                <div className="container ">
                    {this.props.location.pathname === "/" && (
                        <div className="row top-row">
                            <SearchComponet />
                        </div>
                    )}
                    <div className="row mb-5">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default connect(recipelistreducer, { ...recipeListactions })(withRouter(LayoutComponet));