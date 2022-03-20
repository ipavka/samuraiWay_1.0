import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {store} from "./redux/redux-store";
import {RootStateType} from "./redux/store";
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

store.subscribe( () => {
    let state = store.getState()
    rerenderTree(state)
});