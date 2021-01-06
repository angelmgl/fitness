/*const element = document.createElement('h1');
const container = document.getElementById('root');
element.innerText = 'Hola mundo!';
container.appendChild(element);*/

import React from 'react';
import ReactDOM from 'react-dom';
import Exercises from './pages/Exercises';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Exercises />, document.getElementById('root'));