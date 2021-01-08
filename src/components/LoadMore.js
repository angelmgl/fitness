import React from 'react';
import './styles/LoadMore.css';
import { Link } from 'react-router-dom';

const LoadMore = (props) => (
        <Link to="/exercise/new">
            <img src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d"
            className="Fitness-Add" alt="button" />
        </Link>
)


export default LoadMore;