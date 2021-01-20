import React from 'react';
import { Button } from '../Posts/Button';

export default ({ name, username, put }) => {

    return (
        <div>
            <div className='card text-center text-dark bg-warning'>
                <div className='card-body'>
                    <div>
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{username}</p>
                    </div>
                    <Button put={put}/>
                </div>
            </div>
        </div>
    )
}