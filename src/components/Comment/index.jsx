import React, {useContext} from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { Context } from '../../context'
import s from './index.module.css'

export default function Comment({id, comment, post_id}) {

  const {deleteComment} = useContext(Context);

  return (
    <div className={s.comment}>
      <CloseOutlined className={s.close_icon} onClick={() => deleteComment(post_id, id)}/>
      <p> <span className={s.comment_mark}>Comment:</span> {comment} </p>
    </div>
  )
}
