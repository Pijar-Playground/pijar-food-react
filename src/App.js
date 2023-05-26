import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      {/* <!-- start of header --> */}
      <header>
        <nav className="container mt-4">
          <div className="row animate__animated animate__fadeInDown">
            <div className="col-10">
              <div>
                <a className="text-primary fw-bold" href="/index.html">
                  Home
                </a>
                <a
                  className="text-primary fw-bold text-decoration-none mx-5"
                  href="/add.html"
                >
                  Add Recipe
                </a>
                <a
                  className="text-primary fw-bold text-decoration-none"
                  href="/profile.html"
                >
                  Profile
                </a>
              </div>
            </div>
            <div className="col" style={{ zIndex: 1 }}>
              <a
                className="text-white me-5 fw-bold text-decoration-none"
                href="/index.html"
              >
                Login
              </a>
              <a
                className="text-white fw-bold text-decoration-none"
                href="/add.html"
              >
                Register
              </a>
            </div>
          </div>
        </nav>

        <div className="mt-2 d-flex justify-content-between align-items-center hide-desktop">
          <img src="/logo.png" width="70px" height="70px" />
          <button
            className="btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <img src="/menu.png" width="35px" height="35px" />
          </button>
        </div>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <a
              className="text-primary fw-bold mb-3 mt-3 text-center"
              href="/index.html"
            >
              Home
            </a>
            <a
              className="text-primary fw-bold text-decoration-none mb-3 text-center"
              href="/add.html"
            >
              Add Recipe
            </a>
            <a
              className="text-primary fw-bold text-decoration-none mb-3 text-center"
              href="/profile.html"
            >
              Profile
            </a>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center" style={{ height: "90vh" }}>
            <div className="col-md-7 col-xs-12 order-2 order-md-1 animate__animated animate__fadeInLeft">
              <h1 className="text-primary">
                Discover Recipe & <br />
                Delicious Food
              </h1>

              <div className="mb-3 w-50 mt-3">
                <input
                  className="form-control form-control-lg"
                  placeholder="search restaurant, food"
                />
              </div>
            </div>
            <div className="col-md-5 col-xs-12 order-1 order-md-2">
              <img
                src="/home.png"
                width="500px"
                height="500px"
                style={{ zIndex: 1 }}
                className="animate__animated animate__fadeIn header-image"
              />
            </div>
          </div>
        </div>

        <div className="bg_yellow"></div>
      </header>
      {/* <!-- end of header --> */}

      {/* <!-- start of new recipe --> */}
      <section id="new-recipe">
        <div className="container">
          <h2 className="mb-5 subtitle">New Recipe</h2>
          <div className="row align-items-center" style={{ marginTop: "100px" }}>
            <div className="col-md-6 col-xs-12">
              <img
                src="/home.png"
                width="500px"
                height="500px"
                style={{ zIndex: 1 }}
              />
            </div>
            <div className="col-md-5 col-xs-12">
              <h3>Healthy Bone Broth Ramen (Quick & Easy)</h3>
              <hr style={{ width: "20%" }} />
              <p className="text-muted">
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <button className="btn btn-warning">Learn More</button>
            </div>
          </div>
        </div>
        <div className="bg_yellow_2"></div>
      </section>
      {/* <!-- end of new recipe --> */}

      {/* <!-- start of popular recipe --> */}
      <section id="popular-recipe">
        <div className="container">
          <h2 className="mb-5 subtitle">Popular Recipe</h2>

          <div className="row">
            <div className="col-md-4 col-xs-12 mb-4">
              <div
                className="menu-background"
                style={{ backgroundImage: "url('/image/manu-cakalang.webp')" }}
              >
                <h3 style={{ textShadow: "0px 0px 2px rgba(0, 0, 0, 0.4)" }}>
                  Chiken Kare
                </h3>
              </div>
            </div>

            <div className="col-md-4 col-xs-12 mb-4">
              <div
                className="menu-background"
                style={{ backgroundImage: "url('/image/manu-cakalang.webp')" }}
              >
                <h3 style={{ textShadow: "0px 0px 2px rgba(0, 0, 0, 0.4)" }}>
                  Chiken Kare
                </h3>
              </div>
            </div>

            <div className="col-md-4 col-xs-12 mb-4">
              <div
                className="menu-background"
                style={{ backgroundImage: "url('/image/manu-cakalang.webp')" }}
              >
                <h3 style={{ textShadow: "0px 0px 2px rgba(0, 0, 0, 0.4)" }}>
                  Chiken Kare
                </h3>
              </div>
            </div>

            <div className="col-md-4 col-xs-12 mb-4">
              <div
                className="menu-background"
                style={{ backgroundImage: "url('/image/manu-cakalang.webp')" }}
              >
                <h3 style={{ textShadow: "0px 0px 2px rgba(0, 0, 0, 0.4)" }}>
                  Chiken Kare
                </h3>
              </div>
            </div>

            <div className="col-md-4 col-xs-12 mb-4">
              <div
                className="menu-background"
                style={{ backgroundImage: "url('/image/manu-cakalang.webp')" }}
              >
                <h3 style={{ textShadow: "0px 0px 2px rgba(0, 0, 0, 0.4)" }}>
                  Chiken Kare
                </h3>
              </div>
            </div>

            <div className="col-md-4 col-xs-12 mb-4">
              <div
                className="menu-background"
                style={{ backgroundImage: "url('/image/manu-cakalang.webp')" }}
              >
                <h3 style={{ textShadow: "0px 0px 2px rgba(0, 0, 0, 0.4)" }}>
                  Chiken Kare
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of popular recipe --> */}

      {/* <!-- start of footer --> */}
      <footer style={{ position: "relative" }}>
        <div>
          <h2 className="text-primary text-center">Eat, Cook, Repeat</h2>
          <p className="text-muted text-center">
            Share your best recipe by uploading here !
          </p>
        </div>

        <p className="footer-copyright">
          © built by
          <a href="https://github.com/kubil-ismail">Bilkis Ismail</a>
        </p>
      </footer>
      {/* <!-- end of footer --> */}
    </div>
  );
}

export default App;
