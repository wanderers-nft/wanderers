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
        </div>
    );
}

export default App;
