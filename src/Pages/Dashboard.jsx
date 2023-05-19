import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import PostCard from "../Components/PostCard";
import UserCard from "../Components/UserCard";

const Dashboard = () => {
  const POSTS_API = "https://jsonplaceholder.typicode.com/posts";
  const USERS_API = "https://jsonplaceholder.typicode.com/users";

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const getPosts = async () => {
    const POSTS = await axios.get(POSTS_API);
    setPosts(POSTS.data);
  };
  const getUsers = async () => {
    const USERS = await axios.get(USERS_API);
    setUsers(USERS.data);
  };

  useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  return (
    <>
      <Header />
      <Footer />
      <div className="container mt-5">
        <div className="row">
          <div className="col border p-5">
            <h2>Users</h2>
            <br />
            {users.map((user) => {
              return <UserCard user={user} from="dashboard" />;
            })}
          </div>
          <div className="col d-flex flex-column border p-5">
            <h2>Posts</h2>
            <br />
            {posts.map((post) => {
              return <PostCard post={post} from="dashboard" />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
