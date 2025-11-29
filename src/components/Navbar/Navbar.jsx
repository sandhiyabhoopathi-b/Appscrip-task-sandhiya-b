import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import Profile from "../../assets/profile.png";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="top-row">
        <div className="left">
          <RxHamburgerMenu className="hamburger" />
          <img src={Logo} alt="logo" className="logo-img" />
        </div>
        <div className="center">LOGO</div>
        <div className="right">
          <CiSearch />
          <IoMdHeartEmpty />
          <BsHandbag />
          <img src={Profile} alt="profile" className="profile-img" />
          <div className="language">
            ENG <FaAngleDown />
          </div>
        </div>
      </div>
      <div className="bottom-row">
        <p className="home">HOME</p>
        <p>SHOP</p>
        <p>SKILLS</p>
        <p>STORES</p>
        <p>ABOUT</p>
        <p>CONTACT US</p>
      </div>
    </nav>
  );
};

export default Navbar;
 