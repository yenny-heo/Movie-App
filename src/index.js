import React from 'react';//UI 라이브러리
import ReactDOM from 'react-dom';//리액트를 웹사이트에 출력하도록 도와줌 (document object model )
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
