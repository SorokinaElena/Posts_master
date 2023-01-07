import {useState, useEffect} from 'react';
import {posts_data} from '../../data/posts_data';
import {Context} from '../../context';
import AddPostForm from '../AddPostForm';
import PostsContainer from '../PostsContainer';
import '../../style.css';
import s from './index.module.css'


function App() {

  const [posts, setPosts] = useState(posts_data);

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem('posts')));
  }, [])

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts]);

  const addComment = (post_id, comment_text) => {
    const comment = {
    id: Date.now(),
    comment: comment_text,
    };
    const target_post = posts.find(el => el.id === post_id)
    target_post.comments.push(comment)
    setPosts([...posts])
  }

  const deletePost = (id) => {
    setPosts(posts.filter(el => el.id !== id))
  }

  const deleteComment = (post_id, comment_id) => {
    const target_post = posts.find(el => el.id === post_id)
    target_post.comments = target_post.comments.filter(el => el.id !== comment_id);
    setPosts([...posts])
  }

  const changeLike = (id) => {
    const target_post = posts.find(el => el.id === id);
    if (target_post.like === false) {
      target_post.like = true;
      target_post.like_count = 1;
    } else {
      target_post.like_count += 1;
    }
    setPosts([...posts]);
  }

  const changeDislike = (id) => {
    const target_post = posts.find(el => el.id === id);
    if (target_post.dislike === false) {
      target_post.dislike = true;
      target_post.dislike_count = 1;
    } else {
      target_post.dislike_count += 1;
    }
    setPosts([...posts]);
  }

  return (
    <div className={s.app_container}>
      <Context.Provider value={{deletePost, addComment, deleteComment, changeLike, changeDislike}}>
        <AddPostForm />
        <PostsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
