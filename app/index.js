import React from 'react';
import { render } from 'react-dom';
import routes from './config/routes';
import './styles/styles.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'flexboxgrid/css/flexboxgrid.css';

injectTapEventPlugin();

render(
    routes,
    document.getElementById('app')
);