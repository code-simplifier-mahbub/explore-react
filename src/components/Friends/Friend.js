import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {

    const {id, name, username, email}= friend;

    return (
        <div>
            <h1>Name: {name}</h1>
            <p>email: {email}</p>
            <p>userName : <Link to={`/friend/${id}`}>{username}</Link></p>
        </div>
    );
};

export default Friend;