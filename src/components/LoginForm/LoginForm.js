import React, {useState} from 'react';
import {Redirect} from 'react-router';
import "./LoginForm.css";
import {InputBox} from "../ForForms/InputBox";
import {SubmitButton} from "../ForForms/SubmitButton";


export function LoginForm() {

    const [redirect] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let onSubmit = ([username, password]);

    const formFieldsConstructor = [
        {
            id: 0,
            type: "text",
            label: "Username",
            onChange: (event) => setUsername(event.target.value)
        },
        {
            id: 1,
            type: "password",
            label: "Password",
            onChange: (event) => setPassword(event.target.value)
        }
    ];

    if (!redirect) {
        return (
            <div className="box" id="login">
                <form>
                    {formFieldsConstructor.map((inputBoxProps => {
                        return <InputBox
                            key={inputBoxProps.id}
                            type={inputBoxProps.type}
                            label={inputBoxProps.label}
                            onChange={inputBoxProps.onChange}
                        />
                    }))}
                    <SubmitButton value={"Submit"} onClick={onSubmit}/>
                </form>
            </div>
        );
    } else {
        return <Redirect to={`/cvpage`}/>
    }
}