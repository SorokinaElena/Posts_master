import AddPostForm from '../AddPostForm';
import PostsContainer from '../PostsContainer';
import '../../style.css';
import s from './index.module.css'


function App() {

  return (
    <div className={s.app_container}>
        <AddPostForm />
        <PostsContainer />
    </div>
  );
}

export default App;
