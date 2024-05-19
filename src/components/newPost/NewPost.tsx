import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IPost} from "../../moduls/Post";

  const NewPost = () => {
  const {register, handleSubmit } = useForm<IPost>();
    const [posts, setPosts] = useState<IPost>()
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: posts?.title,
        body: posts?.body,
        userId: 1,
        
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },


    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  const save = (formValues:IPost)=>{
    // @ts-ignore
    setPosts(formValues)
  }
  return (
      <div>
        <form onSubmit={handleSubmit(save)}>
          <input type="text" {...register('title')} />
          <input type="text" {...register('body')}/>
          <button>Add Post</button>
        </form>
      </div>
  );
};

export default NewPost;