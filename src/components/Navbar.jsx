import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <nav className="container mt-4">
          <div className="row animate__animated animate__fadeInDown">
            <div className="col-10">
              <div>
                <Link className="text-primary fw-bold" to="/">
                  Home
                </Link>
                <Link
                  className="text-primary fw-bold text-decoration-none mx-5"
                  to="/add"
                >
                  Add Recipe
                </Link>
                <Link
                  className="text-primary fw-bold text-decoration-none"
                  to="/profile"
                >
                  Profile
                </Link>
              </div>
            </div>
            <div className="col" style={{ zIndex: 1 }}>
              {localStorage.getItem("auth") ? (
                <>
                  <Link
                    className="text-white fw-bold text-decoration-none"
                    onClick={() => {
                      localStorage.clear();

                      window.location.href = "/login";
                    }}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className="text-white me-5 fw-bold text-decoration-none"
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="text-white fw-bold text-decoration-none"
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>

        <div className="mt-2 d-flex justify-content-between align-items-center hide-desktop">
          <img src="/logo.png" width="70px" height="70px" />
          <button
            className="btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample2"
            aria-expanded="false"
            aria-controls="collapseExample2"
          >
            <img src="/menu.png" width="35px" height="35px" />
          </button>
        </div>
        <div className="collapse" id="collapseExample2">
          <div className="card card-body">
            <Link className="text-primary fw-bold mb-3 mt-3 text-center" to="/">
              Home
            </Link>
            <Link
              className="text-primary fw-bold text-decoration-none mb-3 text-center"
              to="/add"
            >
              Add Recipe
            </Link>
            <Link
              className="text-primary fw-bold text-decoration-none mb-3 text-center"
              to="/profile"
            >
              Profile
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
