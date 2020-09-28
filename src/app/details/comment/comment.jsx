import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import recipeListactions from "./../../home/recipeListactions";
import recipelistreducer from './../../home/recipelistreducer';


class CommentComponent extends React.Component {

    state = {
        comment: ''
    };

    render() {
        let rec = this.props?.home?.recipeDetails || {};
        return <React.Fragment>
            <div className="form-group ">
                <textarea className="form-control" value={this.state.comment} onChange={(e) => {
                    let comment = e.target.value;
                    this.setState({ comment })
                }
                } id="Comments" rows="3"></textarea>
            </div>
            <button type="button mt-1 " onClick={() => {
                let recipeList = this.props.home.recipeList;
                let index = recipeList?.findIndex((rece) => +rece.id == +rec.id);
                if (!recipeList[index].comments) {
                    recipeList[index].comments = []
                }
                recipeList[index].comments.push(this.state.comment);
                this.props.setRecipeList(recipeList);
                this.props.setRecipeDetails(rec);
                this.setState({ comment: '' })
            }} className="btn btn-dark">comment</button>
            {rec?.comments?.length && (
                <ul className="list-group text-left">
                    Comments:
                    {rec?.comments?.map((c, i) => <li key={i + "comment"} className="list-group-item m-1">{c}</li>)}
                </ul>
            )}
        </React.Fragment>
    }
}

export default connect(recipelistreducer, { ...recipeListactions })(withRouter(CommentComponent));