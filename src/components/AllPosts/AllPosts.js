import React from 'react';
import OnePost from './OnePost';
import { useDispatch, useSelector } from 'react-redux';
import { allPosts } from '../../redux/actions';
import { Link } from 'react-router-dom';


export default () => {

    const dispatch = useDispatch();
    const post = useSelector(state => state.post.post)


    if (!post) {
        return (
            <button onClick={() => dispatch(allPosts())} className="btn btn-danger d-grid gap-2 col-3 mx-auto mt-2">Show all information with all comments</button>
        )
    }
    return (
        <div>
            {post.map(post => <OnePost postId={post.postId} id={post.id} name={post.name} email={post.email} body={post.body} key={post.id} />)}
            <Link to='/put'>
                {<button className="btn btn-warning d-grid gap-2 col-2 mx-auto mt-2">EDIT</button>}
            </Link>
            <Link to='/delete'>
                {<button className="btn btn-warning d-grid gap-2 col-2 mx-auto mt-2">DELETE</button>}
            </Link>
        </div>
    )
}