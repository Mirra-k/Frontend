import React, {Component} from 'react';
import "./EnterMenu.css";


const Selection = props => (
    <li>
        <a
            href={props.href}
            data-text={props.children.toUpperCase()}>
            {props.children}
        </a>
    </li>
);

export class EnterMenu extends Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <Selection href={`/login`}>Login</Selection>
                    <Selection href={`/signup`}>Signup</Selection>
                </ul>
            </div>
        );
    }
}