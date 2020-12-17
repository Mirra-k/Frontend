import React, {useState} from 'react';
import {Redirect} from 'react-router';
import "./SignupForm.css";
import {InputBox} from "../ForForms/InputBox";
import {SubmitButton} from "../ForForms/SubmitButton";
const URL = 'http://localhost:8000/';

export function SignupForm() {

    const [redirect, setRedirect] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [education, setEducation] = useState('');
    const [workExperience, setWorkExperience] = useState('');
    const [technicalSkills, setTechnicalSkills] = useState('');
    const [interests, setInterests] = useState('');
    const [personalQualities, setPersonalQualities] = useState('');


    let onSubmit = React.useCallback(async (e) => {
        e.preventDefault();
        const data = JSON.stringify({
            user: {
                username,
                password,
                first_name: name,
                last_name: surname,
                email
            },
            education: education,
            work_xperience: workExperience,
            technical_skills: technicalSkills,
            interests: interests,
            personal_qualities: personalQualities,
        });
        const response = await fetch(`${URL}register`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        });
        if (response.ok) {
            setRedirect(true);
        } else {
            console.error(response);
        }
    }, [
        username,
        password,
        name,
        surname,
        email,
        education,
        workExperience,
        technicalSkills,
        interests,
        personalQualities
    ]);

    const formFieldsConstructor = [
        {
            id: 0,
            type: "text",
            label: "Username",
            onChange: (e) => setUsername(e.target.value)
        },
        {
            id: 1,
            type: "password",
            label: "Password",
            onChange: (e) => setPassword(e.target.value)
        },
        {
            id: 2,
            type: "text",
            label: "Name",
            onChange: (e) => setName(e.target.value)
        },
        {
            id: 3,
            type: "text",
            label: "Surname",
            onChange: (e) => setSurname(e.target.value)
        },
        {
            id: 4,
            type: "email",
            label: "Email",
            onChange: (e) => setEmail(e.target.value)
        },
        {
            id: 5,
            type: "text",
            label: "Education",
            onChange: (e) => setEducation(e.target.value)
        },
        {
            id: 6,
            type: "text",
            label: "Work experience",
            onChange: (e) => setWorkExperience(e.target.value)
        },
        {
            id: 7,
            type: "text",
            label: "Technical skills",
            onChange: (e) => setTechnicalSkills(e.target.value)
        },
        {
            id: 8,
            type: "text",
            label: "Interests",
            onChange: (e) => setInterests(e.target.value)
        },
        {
            id: 9,
            type: "text",
            label: "Personal qualities",
            onChange: (e) => setPersonalQualities(e.target.value)
        }
    ];

    if (!redirect) {
        return (
            <div className="box" id="signup">
                <form>
                    {formFieldsConstructor.map(inputBoxProps => (
                        <InputBox
                            key={inputBoxProps.id}
                            type={inputBoxProps.type}
                            label={inputBoxProps.label}
                            onChange={inputBoxProps.onChange}
                        />
                    ))}
                    <SubmitButton value={"Submit"} onClick={onSubmit}/>
                </form>
            </div>
        );
    } else {
        return <Redirect to={`/login`}/>;
    }
}