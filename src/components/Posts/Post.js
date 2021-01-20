import React from 'react';

export default ({ title, body }) => {
    return (
        <div>
            <div className='card text-center text-white bg-success'>
                <div className='card-body'>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                </div>
            </div>
        </div>
    )
}