import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';
import './index.css';

import i18n from "i18next";
import {I18nextProvider} from "react-i18next";
const root = ReactDOM.createRoot(document.getElementById('root'));
i18n.init().then(
    () => root.render(<React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <App/>
        </I18nextProvider>
    </React.StrictMode>)
);
// root.render(<React.StrictMode>
//         <I18nextProvider i18n={i18n}>
//             <App/>
//         </I18nextProvider>
//     </React.StrictMode>
// );
