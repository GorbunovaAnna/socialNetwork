import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {id: 1, name: 'Anna'},
  {id: 2, name: 'Nik'},
  {id: 3, name: 'Jim'},
  {id: 4, name: 'Kate'},
  {id: 5, name: 'Sem'},
  {id: 6, name: 'Maria'},
]

let lettersData = [
  {id: 1, text: "Hi"},
  {id: 2, text: "What is your name?"},
  {id: 3, text: "What are you doing?"},
  {id: 4, text: "Let's go to the park."},
]

const postsDate = [
  {id: 1, message: "How are you?"},
  {id: 2, message: "Hello, word!"}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} lettersData={lettersData} postsDate={postsDate}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
