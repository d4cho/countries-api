import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import CountryDetails from "./pages/CountryDetails/CountryDetails";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
    return (
        <Router>
            <Header />
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
