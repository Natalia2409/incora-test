import { combineReducers } from "redux";
import { CREATE_POST, GET_POSTS, GET_USERS, ALL_POSTS, PUT_POST, DELETE_POST } from "./types";

const initialState = {
    users: '',
    posts: '',
    post: '',
    putPost: ''
}

export const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    post: allPosts,
    putPost: putPost
})

function usersReducer(state = initialState, action) {
    switch(action.type) {
        case GET_USERS:
            return { ...state, users: action.payload}
        default: return state
    }
}

function postsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS:
            return { ...state, posts: action.payload}
        case CREATE_POST:
            const posts = state.posts.concat(action.payload)
            return {...state, posts}
        default: return state
    }
}

function allPosts(state = initialState, action) {
    switch(action.type) {
        case ALL_POSTS:
            return { ...state, post: action.payload }
        default: return state
    }
}

function putPost(state = initialState, action) {
    switch(action.type) {
        case PUT_POST:
            return { ...state, putPost: action.payload }
        case DELETE_POST:
            return state.posts
        default: return state
    }
}

