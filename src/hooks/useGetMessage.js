import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addAllMessages } from "../utils/messageSlice";

const useGetMessage = (message) => {
  const dispatch = useDispatch();
  const getAllMessages = async () => {
    try {
      const response = await axios.get("http://localhost:4500/api/v1/messages");
      dispatch(addAllMessages(response.data.messages));
    } catch (err) {
      console.error("Error fetching messages:", err.message);
    }
  };

  useEffect(() => {
    getAllMessages();
  }, [message]);
};

export default useGetMessage;
