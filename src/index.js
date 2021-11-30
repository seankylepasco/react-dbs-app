import React from 'react';
import reactDom from 'react-dom';
import App from './App';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

reactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById('root')
);