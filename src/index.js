import React from "react";
import ReactDOM from "react-dom/client";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { IntlProvider } from "react-intl-redux";
import { Provider } from "react-redux";

import reportWebVitals from './reportWebVitals';
import history from "./helpers/history";
import { store } from "./store";
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <IntlProvider>
            <HistoryRouter history={history}>
                <App />
            </HistoryRouter>
        </IntlProvider>
    </Provider>
);

reportWebVitals();
