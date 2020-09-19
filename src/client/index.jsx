import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../shared/app/app.jsx';

window.addEventListener('load', () => {
  ReactDOM.hydrate(
    <App />,
    document.getElementById('root')
  );
});
