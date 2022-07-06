import React from "react";
import { Route, Switch } from "react-router-dom";


import { ROUTES } from "./routeNames";
import RegistrationContainer from "../Pages/RegistrationPage/containers/RegistrationContainer";
import HomePageContainer from "../Pages/HomePage/containers/HomePageContainer";

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer}/>
            <Route path={ROUTES.REGISTRATION_PAGE} component={RegistrationContainer}/>
        </Switch>
    );
};

export default Routes;