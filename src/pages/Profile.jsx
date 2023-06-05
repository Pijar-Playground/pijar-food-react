import React from "react";
import "../styles/Profile.scss";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";

import recipeList from "../menu.json";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="profile_page">
      <Navbar />

      <section>
        <div className="d-flex justify-content-center">
          <img
            src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
            alt="Profile"
            height="150px"
            width="150px"
            className="image-circle"
            style={{ objectFit: "cover" }}
          />
        </div>
        <h1 className="text-center">Bilkis ismail</h1>
      </section>

      <section className="container">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              My Recipe
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Saved Recipe
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Liked Recipe
            </a>
          </li>
        </ul>

        <div className="row mt-5">
          {recipeList.menu.map((item) => (
            <RecipeCard title={item?.title} image={item?.image} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Profile;
