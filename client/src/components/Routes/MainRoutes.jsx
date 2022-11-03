import React from "react";
import { Routes, Route } from "react-router-dom";
import { Admin } from "../pages/Admin";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Quiz } from "../pages/Quiz";
import RequireAuth from "../pages/RequireAuth";
import { Signup } from "../pages/Signup";
import { User } from "../pages/User";

export const MainRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={
      <RequireAuth>
         <Home/>
      </RequireAuth> 
     }/>
     <Route path="/admin" element={<Admin/>}/>
     <Route path="/user" element={
      <RequireAuth>
        <User/>
      </RequireAuth>
     }/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/quiz" element={<Quiz/>}/>


    </Routes>
  );
};
