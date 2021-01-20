import React from 'react';

export default ({ postId, id, name, email, body }) => {
    return (
        <div className="card text-center mt-2">
            <div className="card-header">
                {postId}
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{email}</p>
                <p className="card-text">{body}</p>
            </div>
            <div className="card-footer text-muted">
                {id}
            </div>
        </div>
    )
}