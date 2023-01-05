
import App from './App';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router><App /></Router>);
