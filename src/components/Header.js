import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../utils/userSlice";
import { BASE_URI } from "../utils/constant";
import logo from "../images/favicon.jpeg";
const Header = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      // Ask for confirmation before logging out
      const confirmLogout = window.confirm("Are you sure you want to log out?");
      if (!confirmLogout) {
        return;
      }
      const response = await axios.get(`${BASE_URI}logout`);

      // Check if the request was successful
      if (response.status === 200) {
        // Dispatch the user to the Redux store
        dispatch(logout());
      } else {
        console.error("Logout request failed:", response.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-between w-screen h-20 px-6 py-3 bg-blue-300">
      <div>
        <img alt="logo" src={logo} className="w-14 h-14" />
      </div>
      <div>
        <h3>AFFWORLD Assignment</h3>
      </div>
      <div>
        <h3>{user.name}</h3>
        <h5
          className="cursor-pointer bg-blue-500 shadow-sm rounded-md px-1 py-1 "
          onClick={handleLogout}
        >
          Logout
        </h5>
      </div>
    </div>
  );
};

export default Header;
