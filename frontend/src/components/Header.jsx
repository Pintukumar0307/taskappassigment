
import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import '../style/header.css';
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom';
import { Context, server } from "../index";

const Header = () => {
    const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const logoutHandler = async () => {
    setLoading(true);
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });

      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  return (
    <header className="header">
      <div className="brand">
        <h1>Task App</h1>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <Link to={'/'} style={{textDecoration:"none",color:"white"}} ><li>Home</li></Link>
          <Link to={'/profile'} style={{textDecoration:"none",color:"white"}} ><li>Profile</li></Link>
          {isAuthenticated ? (
          <button disabled={loading} onClick={logoutHandler} className="btn">
            Logout
          </button>
        ) : (
          
          <Link to={"/login"} style={{textDecoration:"none",color:"white"}} >Login</Link>
         
          
        )}
         
        </ul>
      </nav>
      <div className={`menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <div className="menu-btn__burger">
        <Hamburger />
        </div>
      </div>
      
    </header>
  );
};

export default Header;

