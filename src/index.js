import React from "react";
import {createRoot} from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {configureStore} from "./store";

createRoot(document.getElementById('root'))
    .render(
        <Provider store={configureStore()}>
            <App/>
        </Provider>
    );