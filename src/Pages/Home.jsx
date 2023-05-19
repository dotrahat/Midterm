import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Header />
    <Footer />
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 border p-3">
                <div className="row">
                  <div className="col-4">
                  <img src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000' style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  height: "150px",                  
                  width: "150px",

                }} />
                  </div>
                  <div className="col-8">
                    <h1>Rahat</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita dolorum enim dignissimos vitae nemo </p>
                  </div>
                </div>
                <div className="row mt-5">
                  <Link to="/posts" class="btn btn-primary" href="#" role="button">See Posts</Link>
                </div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
    </>
  )
}

export default Home
