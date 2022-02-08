import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const dialogsData = [
    {id: 1, name: "Dimon"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Max"},
    {id: 4, name: "Svetlana"},
    {id: 5, name: "Elena"},
    {id: 6, name: "Pavel"},
]

const messagesData = [
    {id: 1, message: "Hi!!!"},
    {id: 2, message: "Yep!!"},
    {id: 3, message: "Goodbye"},
]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
