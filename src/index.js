import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store2 } from './store/store2';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { configureFakeBackend } from './helpers/fake_backend';

const container = document.getElementById('root');
const root = createRoot(container);
const stores = store2;


root.render(
  <React.StrictMode>
    <Provider store={stores}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals(console.log);
registerServiceWorker();
configureFakeBackend();
