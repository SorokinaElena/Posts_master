import React from 'react'
import { addPost } from '../../store/reducers/postsReducer'
import {useDispatch} from 'react-redux'
import s from './index.module.css'

export default function AddPostForm() {

  const dispatch = useDispatch()

  const form_submit = (event) => {
      event.preventDefault();
      const {title, text} = event.target;
      dispatch(addPost({
        title: title.value, 
        text: text.value
      }));
      title.value = '';
      text.value = '';
  }

  return (
    <form className={s.add_post_form} onSubmit={form_submit}>
      <input type="text" name="title" placeholder="Your title of a topic"/>
      <textarea type="text" name="text" placeholder="Your topic" className={s.input_text} />
      <button>publish</button>
    </form>
  )
}


