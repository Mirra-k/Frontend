import React, {Component} from 'react';
import {CvPage} from "./CvPage";
import {ExitButton} from "../ExitButton/ExitButton";


export class CandidateApp extends Component {

    render() {
        return (
            <div className="CandidateApp">
                <CvPage/>
                <ExitButton/>
            </div>
        );
    }
}
