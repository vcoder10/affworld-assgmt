import React, { useRef } from "react";
import Header from "./Header.js";
import logo from "../images/icon.png";
import axios from "axios";
import useGetMessage from "../hooks/useGetMessage.js";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/messageSlice.js";
import { BASE_URI } from "../utils/constant.js";

const Message = () => {
  const message = useRef("");
  useGetMessage(message);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const messages = useSelector((state) => state.message.messages);

  const handelSendBtn = async () => {
    try {
      const newMessage = message.current.value.trim();

      if (newMessage === "") {
        alert("Please enter a message");
        return;
      }

      // Update local state with the new message
      dispatch(
        addMessage({
          userId: user._id,
          userName: user.name,
          message: newMessage,
        })
      );

      // Clear the input field after sending the message
      message.current.value = "";

      // Send the message to the backend (if needed)
      await axios.post(`${BASE_URI}api/v1/create`, {
        user: user,
        message: newMessage,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-200">
      <Header />

      <div className="left-0 right-0 flex flex-col justify-center w-2/3 pt-6 mx-auto">
        {messages &&
          messages.map((message, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2 my-1 bg-white rounded-lg"
            >
              <div className="flex items-center justify-center px-2 py-1 mx-1 bg-gray-200 rounded-lg">
                <img
                  src={logo}
                  alt="usericon"
                  className="w-10 h-10 rounded-full "
                />
                <h3 className="px-2 text-lg text-black">
                  {message.userName === user.name ? "You" : "anonymous"}
                </h3>
              </div>
              <p className="text-black ">{message.message}</p>
            </div>
          ))}
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
