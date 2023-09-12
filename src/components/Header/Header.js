import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to= "/friend">Friends</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default header;