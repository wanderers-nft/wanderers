import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "@fontsource/roboto-mono";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Web3ReactProvider } from '@web3-react/core';
import reportWebVitals from "./reportWebVitals";
import {Web3Provider} from "@ethersproject/providers";


function getLibrary(provider: any): Web3Provider {
    const lib = new Web3Provider(provider);
    lib.pollingInterval = 12000;
    return lib;
}

ReactDOM.render(
    <React.StrictMode>
        <Web3ReactProvider getLibrary={getLibrary}>
            <App/>
        </Web3ReactProvider>
    </React.StrictMode>
,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
