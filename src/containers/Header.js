import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand mx-3 h1" to="/">
          Fake Shop
        </Link>
      </nav>
    </div>
  );
};

export default Header;
