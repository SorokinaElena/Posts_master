import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { deleteComment } from '../../store/reducers/postsReducer'
import { useDispatch } from 'react-redux'
import s from './index.module.css'

export default function Comment({id, comment, post_id}) {

  const dispatch = useDispatch();

  return (
    <div className={s.comment}>
      <CloseOutlined className={s.close_icon} onClick={() => dispatch(deleteComment({post_id: post_id, comment_id: id})) }/>
      <p> <span className={s.comment_mark}>Comment:</span> {comment} </p>
    </div>
  )
}
