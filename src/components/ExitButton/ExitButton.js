import React, {Component} from 'react';
import './ExitButton.css';


const Exit = (props) => {
    return (<a href={props.href} className="exit__item">
        {props.text}
    </a>);
};


export class ExitButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actions: [
                {
                    "name": "Exit",
                    "href": "/"
                }
            ]
        };
        this.state.menuItemsAmount = this.state.actions.length;
    }

    render() {
        return (
            <div className="exit">
                {this.state.actions.map(
                    action => <Exit
                        key={action.id}
                        href={action.href}
                        text={action.name}
                    />
                )}
            </div>
        )
    }
}