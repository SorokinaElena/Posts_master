import React, {useContext} from 'react'
import CommentsContainer from '../CommentsContainer'
import {CloseOutlined} from '@ant-design/icons'
import { HeartFilled } from '@ant-design/icons'
import { DislikeFilled } from '@ant-design/icons'
import {Context} from '../../context'
import {deletePost} from '../../store/reducers/postsReducer'
import { useDispatch } from 'react-redux'
import s from './index.module.css'

export default function Post({id, title, text, like, dislike, like_count, dislike_count, comments}) {

  const {changeLike, changeDislike} = useContext(Context);
  const dispatch = useDispatch();

  return (
    <div className={s.post}>
        <CloseOutlined className={s.close_icon} onClick={() => dispatch(deletePost(id))} />
        <h1>{title}</h1>
        <p>{text}</p>
        <CommentsContainer comments={comments} post_id={id}/>
        <div className={s.btn_container}>
          <button className={s.btn} onClick={() => changeLike(id)}> 
            <HeartFilled style={{color: 'red'}}/>
            {like ? ` ${like_count}` : ' ?'} 
          </button>
          <button className={s.btn} onClick={() => changeDislike(id)}> 
            <DislikeFilled style={{color: 'grey'}} /> 
            {dislike ? ` ${dislike_count}` : ' ?'} 
          </button>
        </div>
        
    </div>
  )
}


