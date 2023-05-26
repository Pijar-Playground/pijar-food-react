import "../styles/Home.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";

import recipeList from "../menu.json";

function App() {
  return (
    <div className="App">
      {/* <!-- start of header --> */}
      <Navbar />

      <header>
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
          <div
            className="row align-items-center"
            style={{ marginTop: "100px" }}
          >
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
            {recipeList.menu.map((item) => (
              <RecipeCard title={item?.title} image={item?.image} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- end of popular recipe --> */}

      <Footer />
    </div>
  );
}

export default App;
