import React from 'react'
import Post from '../Post'
import {useSelector} from 'react-redux'
import s from './index.module.css'

export default function PostsContainer() {

  const posts = useSelector(state => state.posts)

  return (
    <div>
      {
          posts.map(el => <Post key={el.id} {...el} />)
      }
    </div>
  )
}

