import { Link } from "react-router-dom";
import Logo from "./images/logo.jpg";
import "./Navbar.css";
import { useState } from "react";
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
    const [links,setLinks]=useState(false)
    const hiddenlinksHandler=()=>{
        setLinks(!links)
    }
  return (
      <div>
    <div className="nav">
      <div className="left-side">
        <div>
          <img src={Logo} alt="logo" className="logo"></img>
        </div>
        {links && <div className="HiddenLinks">
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/About">About</Link>
        <Link to="/Login">Login</Link>
        </div>}
      </div>
      <div className="right-side">
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/About">About</Link>
        <Link to="/Login">Login</Link>
        <button onClick={hiddenlinksHandler}><ReorderIcon/></button>
      </div>
    </div>
    </div>
  );
};
export default Navbar;
