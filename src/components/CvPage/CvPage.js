import React, {Component} from 'react';
import './CvPage.css';
import ClientService from "../../services/ClientService";
import WorkSpace from "../WorkSpace";


export class CandidateWorkspace extends Component {

    constructor(props) {
        super(props);
        this.state = {
            iformation: [],
        };
    }

    fetchInform = async () => {
        ClientService("cvpage", {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
            }
        ).then((iformation) => {
            if (Array.isArray(iformation) && iformation.length > 0) {
                this.setState({
                    iformation: iformation
                });
                console.log(this.state)
            } else {
                this.setState({
                    iformation: []
                });
            }
        })
    };

    componentDidMount() {
        this.fetchInform().then(r => {
        });
    }

    render() {
        return (
            <React.Fragment>
                {<div className={"main-container"}>
                        <div className={"container"}>
                            {this.state.iformation.map(
                                inform => (
                                    <WorkSpace
                                        key={inform.id}
                                        recruiterLogin={inform.recruiter.user.username}
                                        companyName={inform.recruiter.company_name}
                                    />)
                            )}
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    };
}