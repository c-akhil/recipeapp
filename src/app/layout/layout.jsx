import React from 'react';
import { withRouter } from 'react-router-dom';
import './layout.css';

class LayoutComponet extends React.Component {
    state = {
    };

    render() {
        return <React.Fragment>

            <div class=" bg-image">

                <div class="container ">
                    <div class="row top-row">

                    </div>
                    <div class="row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default withRouter(LayoutComponet);