import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer, {initialState} from './reducer';
import { StateProvider } from './StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoralisProvider
    serverUrl="https://y20rafsnwwjh.usemoralis.com:2053/server"
    appId="hpT9fGnxWS3caB1mU7jskyb8GN4VCbuzuk4vB7Z7"
  >
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </React.StrictMode>
  </MoralisProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
