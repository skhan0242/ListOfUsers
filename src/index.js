import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux"
import './index.css';
import App from './App';
import store from "./Config/store";

const app = <Provider store={store}>
    <App />
</Provider>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
