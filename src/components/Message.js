import React, { useEffect, useRef } from "react";
import Header from "./Header.js";
import logo from "../images/icon.png";
import axios from "axios";
import useGetMessage from "../hooks/useGetMessage.js";

const Message = () => {
  const message = useRef("");
  useGetMessage(message);

  const handelSendBtn = async () => {
    try {
      if (message.current.value === "") {
        alert("Please enter message");
      }
      const response = await axios.post("http://localhost:4500/api/v1/create", {
        message: message.current.value,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-screen h-screen bg-gray-200">
      <Header />
      <div className="left-0 right-0 flex flex-col justify-center w-2/3 pt-6 mx-auto">
        <div className="w-full p-6  bg-gray-700 rounded-lg mt-10 h-[30rem] ">
          <div className="flex items-center px-4 py-2 my-1 bg-white rounded-lg">
            <div className="flex items-center justify-center px-2 py-1 mx-1 bg-gray-200 rounded-lg">
              <img
                src={logo}
                alt="usericon"
                className="w-10 h-10 rounded-full "
              />
              <h3 className="px-2 text-lg text-black">Anonymous</h3>
            </div>
            <p className="text-black ">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="flex items-center px-4 py-2 my-1 bg-white rounded-lg">
            <div className="flex items-center justify-center px-2 py-1 mx-1 bg-gray-200 rounded-lg ">
              <img
                src={logo}
                alt="usericon"
                className="w-10 h-10 rounded-full "
              />
              <h3 className="px-2 text-lg text-black">Anonymous</h3>
            </div>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="flex items-center px-4 py-2 bg-white rounded-lg">
            <div className="flex items-center justify-center px-2 py-1 mx-1 bg-gray-200 rounded-lg">
              <img
                src={logo}
                alt="usericon"
                className="w-10 h-10 rounded-full "
              />
              <h3 className="px-2 text-lg text-black">Anonymous</h3>
            </div>
            <p className="text-black ">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="flex ml-10 w-fll">
          <input
            ref={message}
            placeholder="write your own seceret message"
            className="w-3/4 px-2 py-3 my-2 text-black bg-white rounded-lg"
          />
          <button
            className="my-2 ml-2 text-white bg-blue-500 rounded-lg w-36"
            onClick={handelSendBtn}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
