import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import UserCard from '../Components/UserCard';

const Users = () => {


  const API = 'https://jsonplaceholder.typicode.com/users';
  const [users, setUsers] = useState([]);

  const getUsers = async () => {

    const users = await axios.get(API);
    console.log(users.data)
    setUsers(users.data);
  }

  useEffect(() => {

    getUsers(API);

  }, [])



  return (
    <>
    <Header />
    <Footer />
    <div className="container mt-5">
    <div className="row d-flex g-5">
    {
      users.map((single_user) => {
        return(
          <UserCard user={single_user} />
        )
      })
    }
    </div>
    </div>
    </>
  )
}

export default Users
