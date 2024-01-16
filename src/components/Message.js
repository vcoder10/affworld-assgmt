import React from "react";
import logo from "../images/icon.png";
const Message = () => {
  return (
    <div className="bg-gray-200 w-screen h-screen">
      <div className="flex flex-col justify-center w-2/3 left-0 right-0 mx-auto pt-6">
        <div className="w-full p-6  bg-gray-700 rounded-lg mt-10 h-[30rem] ">
          <div className="flex  bg-white py-2 px-4 rounded-lg  items-center my-1">
            <div className="flex justify-center items-center mx-1 bg-gray-200 rounded-lg px-2 py-1">
              <img
                src={logo}
                alt="usericon"
                className="w-10 h-10 rounded-full "
              />
              <h1 className="text-black text-lg px-2">Anonymous</h1>
            </div>
            <p className="text-black text-lg">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="flex  bg-white py-2 px-4 rounded-lg  items-center my-1">
            <div className="flex justify-center items-center mx-1 bg-gray-200 rounded-lg px-2 py-1 ">
              <img
                src={logo}
                alt="usericon"
                className="w-10 h-10 rounded-full "
              />
              <h1 className="text-black text-lg px-2">Anonymous</h1>
            </div>
            <p className="text-black text-lg">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="flex  bg-white py-2 px-4 rounded-lg  items-center">
            <div className="flex justify-center items-center mx-1 bg-gray-200 rounded-lg px-2 py-1">
              <img
                src={logo}
                alt="usericon"
                className="w-10 h-10 rounded-full "
              />
              <h1 className="text-black text-lg px-2">Anonymous</h1>
            </div>
            <p className="text-black text-lg">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="flex w-fll ml-10">
          <input
            placeholder="write your own seceret message"
            className="py-3 px-2 my-2 w-3/4 rounded-lg bg-white text-black"
          />
          <button className="bg-blue-500 text-white w-36 rounded-lg my-2 ml-2">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
