import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/actions';
import User from './User';

export default () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    if(!users.length) {
        return <button
            className="btn btn-primary col-6 d-grid gap-2 col-6 mx-auto mt-2"
            onClick={() => {
                dispatch(getUsers())}}
            >
                Завантажити
            </button>
    }

    return (
        <div>
            {users.map(user => <User name={user.name} username={user.username} key={user.id} put={user.id}/>)}
        </div>
    )
}