import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from '../shared/Header.jsx'

window.addEventListener('load', () => {
    ReactDOM.hydrate(
        <Header />,
        document.getElementById('root')
    );
});

