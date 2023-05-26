function Login() {
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

            <form>
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
