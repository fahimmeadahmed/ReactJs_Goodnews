import React from "react";
import { Router } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container"><div className="container-fluid">
                <a className="navbar-brand" href="/">Good News Portal</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/title">Title</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </nav>

    );
};

export default Navbar;