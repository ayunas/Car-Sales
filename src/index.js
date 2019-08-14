import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';
import {createStore} from 'redux';
import {reducer} from './components/reducer';
import {Provider} from 'react-redux';

const redux = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={redux}><App /></Provider>, rootElement);
