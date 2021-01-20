import React from 'react';
import Post from './Post';
import { useSelector } from 'react-redux';
import { Link }from 'react-router-dom';

export default ({ put }) => {
    const posts = useSelector(state => state.posts.posts);
    if (!posts) {
        return (
            <div>Something go wrong...</div>
        )
    }

    return <div>
       {posts.map(post => <Post title={post.title} body={post.body} key={post.id}/>)}
       {<Link to='/details'>
            <button className="btn btn-danger d-grid gap-2 col-2 mx-auto mt-2">Details</button>
       </Link>}
       {<Link to='/input'>
            <button className="btn btn-danger d-grid gap-2 col-2 mx-auto mt-2">Add new</button>
       </Link>}
    </div> 
}