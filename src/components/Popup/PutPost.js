import React from 'react';
import { useDispatch } from 'react-redux';
import { putPost } from '../../redux/actions';

const PutPost = () => {
  const dispatch = useDispatch();

  function putInputs() {

    const userId = document.getElementById('userId').value;
    const id = document.getElementById('id').value;
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    let putObj = {
      userId,
      id,
      title,
      body
    }
    
    dispatch(putPost(putObj))
  }

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">UserId</span>
        <input type="text" id="userId" placeholder="userId" aria-label="body" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Id</span>
        <input type="text" id="id" placeholder="id" aria-label="body" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Title</span>
        <input type="text" id="title" placeholder="title" aria-label="title" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Body</span>
        <input type="text" id="body" placeholder="body" aria-label="body" aria-describedby="basic-addon1"/>
      </div>
      <button onClick={putInputs} className="btn btn-primary d-grid gap-2 col-3 mx-auto mt-2">SEND</button>
    </div>
  )
}

export default PutPost;