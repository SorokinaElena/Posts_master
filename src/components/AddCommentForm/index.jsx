import React, {useContext} from 'react'
import { Context } from '../../context';
import s from './index.module.css'

export default function AddCommentForm({post_id}) {

  const {addComment} = useContext(Context);

  const submit = (event) => {
    event.preventDefault();
    const {comment} = event.target;
    addComment(post_id, comment.value);
    comment.value = '';
  }

  return (
    <form className={s.add_comment_form} onSubmit={submit}>
      <input type="text" name='comment' placeholder='Enter your comment' className={s.comment_input}/>
      <button>add comment</button>
    </form>
  )
}

