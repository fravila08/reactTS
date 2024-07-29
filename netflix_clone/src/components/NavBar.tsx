import React from "react";
import logo from "../assets/stream_logo.png";
import { NavBarPropsI, NavItemI } from "../utilities/interfaces";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC<NavBarPropsI> = ({ setSelectedTab }) => {
  const navigate = useNavigate()
  const tabs: Array<NavItemI> = [{label:"Home", mediaType:'movie'}, {label:"TV Shows", mediaType:'tv'},{label:"My List", mediaType:'list'}];

  return (
    <ul id="nav-bar">
      <img onClick={() => setSelectedTab('movie')} src={logo} />
      {tabs.map((tab, idx) => (
        <li 
          key={idx}
          className="nav-item" 
          onClick={() => [setSelectedTab(tab.mediaType), navigate('/browse')]}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
