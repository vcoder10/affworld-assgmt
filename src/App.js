import Login from "./components/Login.js";
import Message from "./components/Message.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-200 w-screen h-screen">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
