import "./NavBar.scss";
import { Link } from "react-router-dom";
import { BsCarFrontFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Navbar({ currentUser, offerProfiles }) {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("token");
    }
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/profile" replace>
          Home
        </Link>
      </div>
      <div className="right">
        <div className="align">
          <Link to="/offersProfile" className="offer_profile">
            Offer
          </Link>
          <div className="contor">
            <span>{offerProfiles.length}</span>
          </div>
        </div>
        <div className="user">
          <div className="dropdown">
            <img
              alt=""
              className="dropdown-toggle"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              src="https://document360.com/wp-content/uploads/2022/01/Ultimate-guide-to-writing-instructions-for-a-user-manual-Document360.png"
            ></img>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <Link className="dropdown-item" to="/" onClick={handleLogout}>
                Logout
              </Link>
            </div>
          </div>
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
