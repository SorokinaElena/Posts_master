import { posts_data } from "../../data/posts_data"

const defaultState = posts_data;

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const CHANGE_LIKE = 'CHANGE_LIKE';
const CHANGE_DISLIKE = 'CHANGE_DISLIKE';

export const addPost = payload => ({type: ADD_POST, payload});
export const deletePost = payload => ({type: DELETE_POST, payload})
export const addComment = payload => ({type: ADD_COMMENT, payload})
export const deleteComment = payload => ({type: DELETE_COMMENT, payload})
export const changeLike = payload => ({type: CHANGE_LIKE, payload})
export const changeDislike = payload => ({type: CHANGE_DISLIKE, payload})

export const postsReducer = (state = defaultState, action) => {
     if (action.type === ADD_POST) {
        return [...state, {
            id: Date.now(),
            ...action.payload,
            like: false,
            like_count: 0,
            dislike: false,
            dislike_count: 0,
            comments: [],
            }]
     } else if (action.type === DELETE_POST) {
        return state.filter(el => el.id !== action.payload)
     } else if (action.type === ADD_COMMENT) {
        const comment = {
            id: Date.now(),
            ...action.payload.comment
        }
        // console.log(comment)
        const target_post = state.find(el => el.id === action.payload.post_id)
        target_post.comments.push(comment)
        return [...state]
     } else if (action.type === DELETE_COMMENT) {
        const target_post = state.find(el => el.id === action.payload.post_id)
        target_post.comments = target_post.comments.filter(el => el.id !== action.payload.id)
        return [...state]
     } else if (action.type === CHANGE_LIKE) {
        const target_post = state.find(el => el.id === action.payload);
        if (target_post.like === false) {
        target_post.like = true;
        target_post.like_count = 1;
        } else {
        target_post.like_count += 1;
        }
        return [...state]
     } else if (action.type === CHANGE_DISLIKE) {
        const target_post = state.find(el => el.id === action.payload);
        if (target_post.dislike === false) {
        target_post.dislike = true;
        target_post.dislike_count = 1;
        } else {
        target_post.dislike_count += 1;
        }
        return [...state]
     }
        else {
            return state
        }
}
