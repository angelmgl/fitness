import React from 'react';

function Welcome(props) {
    return (
        <div className="container">
            <div style={{
                marginTop: '50px',
                marginBottom: '50px',
                marginLeft: '200px'
            }}>
                <h1>Hello {props.username}!</h1>
                <p>Let's workout to get someone gains!</p>
            </div>
        </div>
    )
} 

export default Welcome;