import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserSingle = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const USERS_API = "https://jsonplaceholder.typicode.com/users";

  const getUser = async (id) => {
    let res = await axios.get(USERS_API);
    console.log(res.data);

    let oneUser = {};

    console.log(id);

    res.data.map((one) => {
        console.log(`if (${one.id} === ${id})`);
        if(one.id == id) {
            oneUser = one;
        }
    })
    console.log("oneUser: ", oneUser)

    setUser(oneUser);
    console.log(`oneUser: ${JSON.stringify(oneUser)}`);
  };

  useEffect(() => {
    getUser(id);
  }, [id]);


  return (
    <>
      <Header />
      <Footer />
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">{user.name}</span>
              <span className="text-black-50">{user.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="name"
                    defaultValue={user.name}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    defaultValue={user.phone}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 1"
                    defaultValue={user?.address?.street}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 2</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 2"
                    defaultValue={user?.address?.city}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Postcode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 2"
                    defaultValue={user?.address?.zipcode}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
                    defaultValue={user.email}
                  />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default UserSingle;
