/*const element = document.createElement('h1');
const container = document.getElementById('root');
element.innerText = 'Hola mundo!';
container.appendChild(element);*/

import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Card 
                title="Technique Guides"
                description="Learn amazing street workout and calistechnics"
                img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                leftColor="#A74CF2"
                rightColor="#617BFB" />,
              document.getElementById('root'));