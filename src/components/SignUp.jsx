import React from "react";

import { useEffect, useState } from "react";

const SignUp = () => {
  const handleSubmit = () => {};
  return (
    <div className="signUpContainer">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Display Name"></input>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <input type="password" placeholder="Confirm Password"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default SignUp;
