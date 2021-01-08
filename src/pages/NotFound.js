import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="text-center">
        <h1>Not Found</h1>
        <p>No podemos encontrar la página que usted está buscando.</p>
        <Link to="/exercise/">Go home page</Link>
    </div>
)

export default NotFound;