import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAuth } from '../reducers/auth';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const state = useSelector((reducer) => reducer.auth);

  React.useEffect(() => {
    if (localStorage.getItem("auth") || state.auth) {
      navigate("/profile");
    }
  }, [state]);

  const handleLogin = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
        email: email,
        password: password,
      })
      .then((result) => {
        Swal.fire({
          title: "Login Success",
          text: "Login success, redirect to app...",
          icon: "success",
        }).then(() => {
          localStorage.setItem("auth", "true");
          localStorage.setItem("token", result?.data?.token);

          dispatch(addAuth(result));
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed",
          text: error?.response?.data?.message ?? "Something wrong in our app",
          icon: "error",
        });
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-4 col-xs-10">
            <h1 className="text-center text-warning">Welcome</h1>
            <p className="text-center text-muted">
              Log in into your exiting account
            </p>

            <hr />

            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  I agree to terms & conditions
                </label>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-warning"
                  onClick={handleLogin}
                >
                  Log in
                </button>
              </div>
            </form>

            <hr />

            <small className="d-block text-center text-muted">
              Don’t have an account?
              <a
                className="text-warning text-decoration-none"
                href="/register.html"
              >
                Sign Up
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
