import React from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import HomeComponet from './app/home/home';
import DetailsComponent from './app/details/details';
import LayoutComponet from './app/layout/layout';
import './App.css';
import "./mfont.css";
// import "./font.scss";
import recipelistreducer from './app/home/recipelistreducer';
import recipeListactions from './app/home/recipeListactions';


class App extends React.Component {

  componentDidMount() {

  }

  componentDidUpdate(prevProp) {

  }

  render() {
    return (
      <div className="App">
        <LayoutComponet>
          <Switch>
            <Route exact path="/" component={HomeComponet} />
            <Route path="/:id" component={DetailsComponent} />
            <Route path="*" component={HomeComponet} />
          </Switch>
        </LayoutComponet>
      </div>
    );
  }
}

export default connect(recipelistreducer, { ...recipeListactions })(withRouter(App));