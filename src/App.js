import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Messages from "./Pages/Messages";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Posts from "./Pages/Posts";
import Users from "./Pages/Users";
import UserSingle from "./Pages/UserSingle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/dashboard" Component={Dashboard}></Route>
          <Route path="/messages" Component={Messages}></Route>
          <Route path="/posts" Component={Posts}></Route>
          <Route path="/singleuser/:id" Component={UserSingle}></Route>
          <Route path="/users" Component={Users}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
