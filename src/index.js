/*const element = document.createElement('h1');
const container = document.getElementById('root');
element.innerText = 'Hola mundo!';
container.appendChild(element);*/

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';


ReactDOM.render(<App />, document.getElementById('root'));