import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-dark justify-content-between">
        <a className="navbar-brand">Navbar</a>
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
            className="btn my-2 my-sm-0"
            type="submit"
          >
            Sign Up
          </button>
          <button
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
