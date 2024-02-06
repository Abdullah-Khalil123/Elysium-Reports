import "../../Styles/NavBar.css";
import message from "../../Assets/Icons/message.svg";
import bell from "../../Assets/Icons/bell.svg";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="mobileButton" onClick={() => {}}></div>
      <h1 className="navbar-title">Statistics</h1>
      <div className="navbuttons">
        <img src={message} alt="" />
        <img src={bell} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
