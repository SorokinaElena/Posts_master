import React from 'react'
import Post from '../Post'
import s from './index.module.css'
import { useContext } from 'react'
import { Context } from '../../context'


export default function PostsContainer() {

  const {posts} = useContext(Context);

  return (
    <div>
      {
          posts.map(el => <Post key={el.id} {...el} />)
      }
    </div>
  )
}

