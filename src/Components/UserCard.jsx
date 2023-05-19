import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserCard = ({ user, from }) => {
  const { id, name, email, address } = user;

  return (
    <div className={from == "dashboard" ? "col mb-3" : "col-3"}>
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Address: {address.street + address.suite}
            <br />
            Email: {email}
          </p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center content-align-center">
          <div className="text-body-secondary">ID: {id}</div>
          <div>
            <Link to={`/singleuser/${id}`} className="btn btn-primary">
              User Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
