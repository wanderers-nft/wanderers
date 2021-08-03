import React from 'react';
import {Navigation} from "./Navigation";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Buy} from "./Buy";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <Route path="/buy">
                        <Buy/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
