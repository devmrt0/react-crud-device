import React from "react"
import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { configureFakeBackend } from './helpers/fake_backend';

const container = document.getElementById('root');
const root = createRoot(container);
const store = configureStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals(console.log);
registerServiceWorker();
configureFakeBackend();




// scripts içine "build": "webpack", de konabilir
//ReactDOM.render(<App/>,document.getElementById('root'))

