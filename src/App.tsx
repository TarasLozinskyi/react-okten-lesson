import React, {useState} from 'react';
import './App.css';
import UsersComponent from "./components/users/UsersComponent";
import {getAllPostsOfSingleUser} from "./services/jpg.api.service";
import {IPostModel} from "./models/IPostModel";
import PostsComponent from "./components/posts/PostsComponent";

function App() {

    const [posts, setPosts] = useState<IPostModel[]>([])
    const lift =(userId:number)=>{
        getAllPostsOfSingleUser(userId).then(({data:{posts}}) => setPosts(posts))
    }
    console.log(posts)
  return (
    <div className="App">
        <div className={'users'}>
            <UsersComponent lift={lift}/>
        </div>
        <div className={'posts'}>
            <PostsComponent posts={posts}/>
        </div>
    </div>
  );
}

export default App;
