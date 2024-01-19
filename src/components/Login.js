import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URI } from "../utils/constant";

const Login = () => {
  const [issignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(null);
  const name = useRef("");
  const email = useRef("");
  const password = useRef();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSignInToggle = () => {
    setIsSignIn(!issignIn);
  };
  const handleBtnSubmit = async () => {
    try {
      if (!issignIn) {
        if (
          !name.current.value ||
          !email.current.value ||
          !password.current.value
        ) {
          setError("Please enter both email and password");
          return;
        }

        const response = await axios.post(`${BASE_URI}register`, {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
        });

        // Assuming your backend sends back the user data upon successful registration
        const user = response.data.user;

        // Dispatch the user to the Redux store
        dispatch(setUser(user));
        setError(null);
        navigate("/message");
      } else {
        if (!email.current.value || !password.current.value) {
          setError("Please enter both email and password");
          return;
        }

        const response = await axios.post(`${BASE_URI}/login`, {
          email: email.current.value,
          password: password.current.value,
        });

        // Assuming your backend sends back the user data upon successful registration
        const user = response.data.user;

        // Dispatch the user to the Redux store
        dispatch(setUser(user));
        setError(null);
        navigate("/message");
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
      setError(error.response.data.error || "An error occurred.");
      // Handle error, show error message, etc.
    }
  };
  return (
    <div className="w-screen h-screen bg-gray-200">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute left-0 right-0 w-full md:w-3/12 p-12 mx-auto my-32 bg-gray-700 bg-opacity-100 rounded-lg"
      >
        <h1 className="py-4 text-2xl font-bold text-blue-500">
          {issignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!issignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="w-full p-4 my-4 bg-white rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full p-4 my-4 bg-white rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 bg-white rounded-lg"
        />
        {error && (
          <p className="py-2 text-lg font-bold text-red-500">{error}</p>
        )}
        <button
          onClick={handleBtnSubmit}
          className="w-full p-4 my-6 bg-blue-500 rounded-lg"
        >
          {issignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="font-bold text-white underline cursor-pointer"
          onClick={handleSignInToggle}
        >
          {issignIn
            ? "New to Affworld? Sign Up Now"
            : "Already Have a Account? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
