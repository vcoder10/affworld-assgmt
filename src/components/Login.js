import React, { useRef, useState } from "react";

const Login = () => {
  const [issignIn, setIsSignIn] = useState(true);
  const name = useRef("");
  const email = useRef("");
  const password = useRef();

  const handleSignInToggle = () => {
    setIsSignIn(!issignIn);
  };
  const handleBtnSubmit = () => {
    console.log(
      // name.current.value,
      email.current.value,
      password.current.value
    );
  };
  return (
    <div className="bg-gray-200 w-screen h-screen">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-gray-700 p-12 my-32 mx-auto left-0 right-0 bg-opacity-100 rounded-lg"
      >
        <h1 className="font-bold text-2xl py-4 text-blue-500">
          {issignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!issignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full rounded-lg bg-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-lg bg-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg  bg-white"
        />
        {/* <p className="text-red-500 font-bold text-lg py-2">{errorMsg}</p> */}
        <button
          onClick={handleBtnSubmit}
          className="p-4 my-6 bg-blue-500 w-full rounded-lg"
        >
          {issignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="font-bold underline cursor-pointer text-white"
          onClick={handleSignInToggle}
        >
          {issignIn
            ? "New to NetflixGPT? Sign Up Now"
            : "Already Have a Account? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
