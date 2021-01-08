import React from 'react';

const Welcome = ({ username }) => (
    <div className="container">
        <div style={{
            marginTop: '50px',
            marginBottom: '50px',
            marginLeft: '200px'
        }}>
            <h1>Hello {username}!</h1>
            <p>Let's workout to get someone gains!</p>
        </div>
    </div>
)

export default Welcome;