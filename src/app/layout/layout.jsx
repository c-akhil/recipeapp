import React from 'react';
import { withRouter } from 'react-router-dom';
import './layout.css';

class LayoutComponet extends React.Component {
    state = {
    };

    render() {
        return <React.Fragment>

            <div className=" bg-image">

                <div className="container ">
                    <div className="row top-row">

                    </div>
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default withRouter(LayoutComponet);