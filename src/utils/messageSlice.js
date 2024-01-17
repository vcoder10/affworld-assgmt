import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
  },
  reducers: {
    addAllMessages(state, action) {
      state.messages.push(action.payload);
    },
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
  },
});

export const { addAllMessages, addMessage } = messageSlice.actions;
export default messageSlice.reducer;
