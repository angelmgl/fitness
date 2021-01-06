import React, { Component } from 'react';
import circlesImg from '../images/circles.png';
import './styles/Card.css';

class Card extends Component {

    constructor(props){
        super(props);

        this.state = {}
    }
    
    render() {

        const { title, description, img, leftColor, rightColor } = this.props;

        return (
            <div className="card mx-auto Fitness-Card mb-3"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} alt={title} className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;