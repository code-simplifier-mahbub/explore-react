import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1>this section about a lot of post</h1>
            {
                posts.map(post => <Post
                key={post.id}
                post = {post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;