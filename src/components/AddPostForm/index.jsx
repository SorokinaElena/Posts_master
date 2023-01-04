import React from 'react'
import s from './index.module.css'
import { Context } from '../../context'
import { useContext } from 'react'

export default function AddPostForm() {

  const {addPost} = useContext(Context)

  const form_submit = (event) => {
      event.preventDefault();
      const {title, text} = event.target;
      addPost(title.value, text.value);
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


