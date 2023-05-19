import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PostCard from '../Components/PostCard'
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Posts = () => {


  const API = 'https://jsonplaceholder.typicode.com/posts';
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {

    const data = await axios.get(API);
    console.log(data.data)
    setPosts(data.data);
  }

  useEffect(() => {

    getPosts(API);

  }, [])



  return (
    <>
    <Header />
    <Footer />
    <div className="container mt-5">
    <div className="row d-flex g-5">
    {
      posts.map((post) => {
        return(
          <PostCard post={post} from="posts" />
        )
      })
    }
    </div>
    </div>
    </>
  )
}

export default Posts
