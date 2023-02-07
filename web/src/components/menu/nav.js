import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Col, Nav, NavItem, NavLink } from "react-bootstrap";

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="row">
      <div className="form-group col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <Link href="/" className="navbar-brand" >
          Nombre
        </Link>
      </div>
       
      <div className="form-group col-xs-9 col-sm-9 col-md-9 col-lg-9">
        <form>
          <div className="input-group input-group-lg">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-describedby="inputGroup-sizing-lg"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex">
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="menu"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => { 
              
              setIsOpen(!isOpen)}}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse${isOpen ? " show" : ""}`}
            id="menu"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-start">
              <li className="nav-item">
                <Link href="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link" aria-current="page">
                  Link
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
