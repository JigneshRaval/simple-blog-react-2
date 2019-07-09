import React from 'react';
import ReactDOM from 'react-dom';

// UIKit
// ==========================
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';


// CSS
// ==========================
import './assets/styles/main.scss';


// APP COMPONENT
// ==========================
import App from './App';


import * as serviceWorker from './serviceWorker';

// loads the Icon plugin
// declare global {
//     interface Window { UIkit: any; }
// }
// window.UIkit = UIkit || {};

(window as any).UIkit = UIkit;
UIkit.use(Icons);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
