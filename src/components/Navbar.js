import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="ui pointing menu">
      <Link to="/" className="active item">Accordion</Link>
      <Link to="/search" className="item">Search</Link>
      <Link to="/dropdown" className="item">Dropdown</Link>
    </div>
  );
};

export default Navbar;
