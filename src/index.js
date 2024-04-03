
import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
import './index.css';

import i18n from "i18next";
import {I18nextProvider} from "react-i18next";

ReactDom.render(
    <I18nextProvider i18n={i18n}>
        <App/>
    </I18nextProvider>,
    document.getElementById('root')
);
