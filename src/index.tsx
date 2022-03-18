import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, subscribe} from "./redux/state";
import {updateNewPostText, RootStateType} from "./redux/state";
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";



const rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree(state);

subscribe(rerenderTree);