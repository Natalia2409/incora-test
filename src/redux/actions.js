import { CREATE_POST, GET_POSTS, GET_USERS, ALL_POSTS, PUT_POST, DELETE_POST } from "./types";
import axios from 'axios';

export function getUsers() {
    return async dispatch => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await responce.json();
        dispatch({ type: GET_USERS, payload: json })
    }
}

export function getPosts({put}) {
    return async dispatch => {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${put}`);
        const json = await responce.json();
        dispatch({ type: GET_POSTS, payload: json })
    }
}

export function allPosts() {
    return async dispatch => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
        const json = await responce.json();
        dispatch({ type: ALL_POSTS, payload: json })
    }
}

export function createPost({ postObj }) {
    return (dispatch) => { 
        axios.post('https://jsonplaceholder.typicode.com/posts', { postObj })
            .then(responce => {
                console.log(responce);
                dispatch({
                    type: CREATE_POST,
                    payload: responce.data
                })
            })
            .catch(error => {
                console.log(error)
            })
      }
}

export function putPost({ putObj }) {
    return (dispatch) => { 
        axios.put('https://jsonplaceholder.typicode.com/posts/1', putObj)
            .then(data => {
                console.log(data);
                dispatch({
                    type: PUT_POST,
                    payload: data
                })
            })
            .catch(error => {
                console.log(error)
            })
      }
}

export function deletePost({ deleteObj }) {
    return (dispatch) => { 
        axios.delete('https://jsonplaceholder.typicode.com/posts/1', deleteObj)
            .then(data => {
                console.log(data);
                dispatch({
                    type: DELETE_POST,
                    payload: data
                })
            })
            .catch(error => {
                console.log(error)
            })
      }
}

