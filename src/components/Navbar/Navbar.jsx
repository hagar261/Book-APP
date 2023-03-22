import React from "react";
import { Link } from "react-router-dom";

import style from "./Navbar.module.css"


const Navbar = () => {



  return (
    <div >
      <nav className={`navbar navbar-expand-lg bg-body-tertiary my-2 ${style.nav}`}>
        <div className="container-fluid">
          <Link to="/" className={style.navbar_brand} href="#">
            New Release
          </Link>
          <button
            className="navbar-toggler my-4 "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
            <form className="d-flex ms-auto" role="search">
              
              <Link to ="/favorites">
              <button className="btn btn-outline-secondary ml-1" type="submit">
              <i class="fa-regular fa-heart"></i>
              <span className="px-3"> Favorites</span>
              
              </button>
              </Link>
              
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
