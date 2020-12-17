import {Route, Switch, withRouter} from 'react-router';
import React from "react";

import {EnterMenu} from "./components/EnterMenu/EnterMenu";
import {SignupForm} from "./components/SignupForm/SignupForm";
import {LoginForm, Login} from "./components/LoginForm/LoginForm";
import {CandidateApp} from "./components/CvPage";


const App = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={EnterMenu}/>
            <Route exact path={'/login'} component={Login}/>
            <Route exact path={'/signup'} component={SignupForm}/>
            <Route exact path={'/cvpage'} component={CandidateApp}/>
        </Switch>
    )
};

export default withRouter(App);