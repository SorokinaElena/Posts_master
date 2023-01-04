import React from 'react'
import AddCommentForm from '../AddCommentForm'
import Comment from '../Comment'
import s from './index.module.css'

export default function CommentsContainer({post_id, comments}) {

  console.log(comments); 

  return (
    <div className={s.comments_container}>
        {
         comments.map(el => <Comment key={el.id} {...el} post_id={post_id}/>)
        }
        <AddCommentForm post_id={post_id}/>
    </div>
  )
}

