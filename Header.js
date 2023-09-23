import { Fragment, React } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg bg-primary shadow-sm mb-5"
        data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            SALES APP
          </a>
          {/* toggler button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* toggler items */}
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/addSales">
                  ADD SALES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/showSales" className="nav-link">
                  TOP 5 SALES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/revenue" className="nav-link">
                  TODAY'S TOTAL REVENUE
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  LOGIN
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  REGISTER
                </Link>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link disabled">
                  LOGOUT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
