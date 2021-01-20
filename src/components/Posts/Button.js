import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../redux/actions';

export const Button = ({ put }) => {
    const dispatch = useDispatch();
    return (
        <Link to='/posts'>
            <button 
            className="btn btn-primary d-grid gap-2 col-2 mx-auto mt-2"
            onClick={() => dispatch(getPosts({put}))}
            >
                POSTS
            </button>
        </Link>
    )
}