import React from 'react';
import './post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    

    const {id,title, body} = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <h1>{title}</h1>
            <h2>{body}</h2>
             <button onClick={handleNavigate}>single post</button>
        </div>
    );
};

export default Post;