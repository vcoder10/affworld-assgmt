import Login from "./components/Login.js";
import Message from "./components/Message.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <div className="w-screen bg-gray-200 overflow-hidden">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/message"
            element={isAuthenticated ? <Message /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
