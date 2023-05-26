import "../styles/Detail.css";

import React from "react";
import { useLocation } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import recipeList from "../menu.json";

function Detail() {
  const detail = recipeList.menu;
  const location = useLocation();
  const [currentRecipe, setCurrentRecipe] = React.useState(null);

  React.useEffect(() => {
    const currentSlug = location?.pathname?.split("/")[2];

    window.scrollTo(0, 0);

    setCurrentRecipe(detail.find((res) => res.slug === currentSlug));
  }, []);

  return (
    <div>
      <Navbar />

      {/* <!-- start of content --> */}
      <section id="content">
        <div className="container">
          <h1 className="text-center text-primary">{currentRecipe?.title}</h1>

          <div className="d-flex justify-content-center">
            <img src={`/image/${currentRecipe?.image}`} className="main-image" />
          </div>

          <div className="row mt-5">
            <div className="col offset-md-2">
              <h2>Ingredients</h2>
              <ul>
                <li>Nasi</li>
                <li>Rempah-rempah rahasia</li>
                <li>Sambal</li>
                <li>Ikan Cakalang</li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col offset-md-2">
              <h2>Video Step</h2>
              <div className="btn btn-warning">Open video step 1</div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of content --> */}

      <Footer />
    </div>
  );
}

export default Detail;
