import React from 'react';
import circlesImg from '../images/circles.png';
import emptyImg from '../images/empty.png'
import './styles/Card.css';

const Card = ({ title, description, img, leftColor, rightColor }) => (
    <div className="card mx-auto mt-3 Fitness-Card"
        style={{
        backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'} , ${rightColor|| '#2F80ED'})`
    }}>
        <div className="card-body">
            <div className="row center">
                <div className="col-6">
                    <img src={img || emptyImg} alt={title} className="float-right" />
                </div>
                <div className="col-6 Fitness-Card-Info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
)

export default Card;