import React from 'react';
import {Navigation} from "./Navigation";
import {HashRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Buy} from "./Buy";

function App() {
    return (
        <div>
            <HashRouter>
                <Navigation/>
                <Switch>
                    <Route path="/buy">
                        <Buy/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>

                </Switch>
            </HashRouter>
            <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "eb38fdd04d394e8f9d021125831dd0fe"}'/>
        </div>
    );
}

export default App;
