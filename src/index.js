import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// Add this in node_modules/react-dom/index.js
window.React1 = require('react');

ReactDOM.render(<App />, document.getElementById('root'));
