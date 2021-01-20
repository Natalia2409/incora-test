import React from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions';
import { Link } from 'react-router-dom';

const Input = () => {
  const dispatch = useDispatch();

  function getInput() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    let postObj = {
      title: title,
      body: body
    }
    
    dispatch(createPost(postObj))
  }

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Title</span>
        <input type="text" id="title" placeholder="title" aria-label="title" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Body</span>
        <input type="text" id="body" placeholder="body" aria-label="body" aria-describedby="basic-addon1"/>
      </div>
      <button onClick={getInput} className="btn btn-primary d-grid gap-2 col-3 mx-auto mt-2">SEND</button>
      <Link to='/allposts'>
        <button className="btn btn-danger d-grid gap-2 col-3 mx-auto mt-2">Go to the page POST</button>
      </Link>
    </div>
  )
}

export default Input;