import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-dark justify-content-between">
        <Link to="/">
          {" "}
          <FontAwesomeIcon icon={faWineBottle} style={{ fontWeight: "900" }} />
          Wine-Delivery
        </Link>
        <div className="mx-auto">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <button
          style={{ color: "white" }}
          className="btn my-2 my-sm-0"
          type="submit"
        >
          Sign Up
        </button>
        <button
          style={{ color: "white" }}
          className="btn my-2 my-sm-0"
          type="submit"
        >
          Log In
        </button>
      </nav>
    </>
  );
};

export default Navbar;
