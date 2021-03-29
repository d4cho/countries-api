import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryDetails from "./pages/CountryDetails/CountryDetails";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/countries/:countryId">
                    <CountryDetails />
                </Route>
                <Route path={["/", "/countries"]}>
                    <LandingPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
