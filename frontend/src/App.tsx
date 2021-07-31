import React from 'react';
import {Navigation} from "./Navigation";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <Route path="/buy">
                        <p>Todo: Buy now</p>
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