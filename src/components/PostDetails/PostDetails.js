import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    return (
        <div>
            <h1>post detail</h1>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
        </div>
    );
};

export default PostDetails;