import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import { Provider } from 'react-redux';

document.title = "Simple Calendar"

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.register({
    onUpdate: registration => {
        console.log("Une mise à jour est disponible");
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
});