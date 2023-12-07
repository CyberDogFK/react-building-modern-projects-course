import React from "react";
import {createRoot} from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {configureStore} from "./store";
import { persistStore } from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

const store = configureStore()
const persistor = persistStore(store);

createRoot(document.getElementById('root'))
    .render(
        <Provider store={store}>
            <PersistGate
                loading={<div>Loading...</div>}
                persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    );