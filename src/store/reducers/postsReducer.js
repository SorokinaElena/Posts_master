import { posts_data } from "../../data/posts_data"

const defaultState = posts_data;

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
// const ADD_COMMENT = 'ADD_COMMENT';

export const addPost = payload => ({type: ADD_POST, payload});
export const deletePost = payload => ({type: DELETE_POST, payload})
// export const addComment = payload => ({type: ADD_COMMENT, payload})

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
        return state.filter(el => el.id !== action.payload)}
    //  } else if (action.type === ADD_COMMENT) {
    //     const comment = {
    //         id: Date.now(),
    //         ...action.payload.comments
    //     }
    //     console.log(comment)
    //     const target_post = state.find(el => el.id === action.payload.post_id)
    //     target_post.comments.push(comment)
    //     return state
    //  }
        else {
            return state
        }
    
}


// const addComment = (post_id, comment_text) => {
//     const comment = {
//     id: Date.now(),
//     comment: comment_text,
//     };
//     const target_post = posts.find(el => el.id === post_id)
//     target_post.comments.push(comment)
//     setPosts([...posts])
//   }