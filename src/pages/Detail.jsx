import "../styles/Detail.css";

import React from "react";
import { useLocation } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import axios from "axios";

function Detail() {
  const location = useLocation();
  const [currentRecipe, setCurrentRecipe] = React.useState(null);
  const id = location?.search?.split("?id=")[1];

  // Handle scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/recipes/${id}`)
      .then((response) => setCurrentRecipe(response?.data?.data[0]));
  }, []);


  return (
    <div>
      <Navbar />

      {/* <!-- start of content --> */}
      <section id="content">
        <div className="container">
          <h1 className="text-center text-primary">{currentRecipe?.name}</h1>

          <div className="d-flex justify-content-center">
            <img src={currentRecipe?.photo} className="main-image" />
          </div>

          <div className="row mt-5">
            <div className="col offset-md-2">
              <h2>Ingredients</h2>
              <p>{currentRecipe?.ingridients}</p>
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
