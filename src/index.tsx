import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";


const rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree()

store.subscribe( () => {
    rerenderTree()
});