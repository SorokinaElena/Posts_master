import React from 'react'
import {addComment} from '../../store/reducers/postsReducer'
import {useDispatch} from 'react-redux'
import s from './index.module.css'

export default function AddCommentForm({post_id}) {

  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    const {comment} = event.target;
    dispatch(addComment({
      post_id: post_id,
      comment: {
        comment: comment.value 
      }
    }));
    comment.value = '';
  }

  return (
    <form className={s.add_comment_form} onSubmit={submit}>
      <input type="text" name='comment' placeholder='Enter your comment' className={s.comment_input}/>
      <button>add comment</button>
    </form>
  )
}

