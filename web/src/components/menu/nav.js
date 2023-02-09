import Link from "next/link";
import { useState } from "react";
import Head from "next/head";

const NavbarExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <main>
        <nav
          className="navbar navbar-dark bg-dark"
          aria-label="First navbar example"
        >
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">
              Test Application
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample01"
              aria-controls="navbarsExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample01">
              <ul className="navbar-nav me-auto mb-2">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default NavbarExample;
