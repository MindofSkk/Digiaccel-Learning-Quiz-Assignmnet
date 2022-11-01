import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1> Ready For Quiz</h1>
     <button> <Link to="/login"> let' Go</Link></button>
    </div>
  );
};
