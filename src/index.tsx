import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType, store} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


const rerenderTree = (props: RootStateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={props}
                     addPost={store.addPost.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState())

store.subscribe(rerenderTree);