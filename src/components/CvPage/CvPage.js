import React, {Component} from 'react';
import './CvPage.css';

export class CvPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            noNewInvites: true,
            invitesCheckedCnt: 0
        };
    }

    render() {
        return (
            <React.Fragment>
                {this.state.noNewInvites ? <h1 className={"page-msg"}>NO INFORMATION</h1> :
                    <div className={"cv"}>
                        <div className={"container"}>
                            {this.state.data.map(
                            )}
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    };
}
