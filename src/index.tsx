import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {RootStateType, store} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


const rerenderTree = (props: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={props}
                     dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState())

store.subscribe(rerenderTree);