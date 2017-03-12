import React from 'react';
import { render } from 'react-dom';
import routes from './config/routes';
import './styles/styles.css';

render(
    routes,
    document.getElementById('app')
);