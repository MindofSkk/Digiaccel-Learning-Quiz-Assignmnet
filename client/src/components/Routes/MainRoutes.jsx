import React from "react";
import { Routes, Route } from "react-router-dom";
import { Admin } from "../pages/Admin";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { User } from "../pages/User";

export const MainRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/admin" element={<Admin/>}/>
     <Route path="/user" element={<User/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>}/>

    </Routes>
  );
};
