import React from 'react';
// import { a } from 'react-router-dom';

export default function Navbar({ mode, title, togglemode }) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-a" to="/about">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-a dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-a disabled" aria-disabled="true" href="#">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className={`form-check form-switch m-3 text-${mode === "light" ? "dark" : "light"}`}>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          <input className="form-check-input" onClick={togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        </div>
      </nav>
    </div>
  );
}
