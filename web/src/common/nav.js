import React, { useState } from "react";
import Link from "next/link";
import Modal from "@common/modal";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    console.log(e);
    setOpen(!open);
  };

  return (
    <div>
      <main>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          aria-label="First navbar example"
        >
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              Test Application
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu"
              aria-controls="menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
              <ul className="navbar-nav me-auto mb-2">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    About
                  </Link>
                </li>
                <li>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setOpen(!open)}
                  >
                    Add Product
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </main>
      
      <Modal openModal={open} setOpen={setOpen}>
      </Modal>
    </div>
  );
};

export default Nav;
