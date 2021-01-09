import React from "react";
import { Link } from "react-router-dom";

const FatalError = () => (
    <div className="text-center">
        <h1>Error 500: Unexpected Error</h1>
        <p>Puede que el servidor no esté disponible en este momento. Reintente más tarde.</p>
        <Link to="/exercise/">Back to home page.</Link>
    </div>
);

export default FatalError;