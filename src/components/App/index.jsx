import {useState, useEffect} from 'react';
import {posts_data} from '../../data/posts_data';
import AddPostForm from '../AddPostForm';
import PostsContainer from '../PostsContainer';
import '../../style.css';
import s from './index.module.css'


function App() {

  // const [posts, setPosts] = useState(posts_data);

  // useEffect(() => {
  //   setPosts(JSON.parse(localStorage.getItem('posts')));
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('posts', JSON.stringify(posts))
  // }, [posts]);

  return (
    <div className={s.app_container}>
        <AddPostForm />
        <PostsContainer />
    </div>
  );
}

export default App;
