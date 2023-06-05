import React from "react";
import "../styles/Profile.scss";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";

import { useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = React.useState(null)
  const [recipeList, setRecipeList] = React.useState([]);
  
  React.useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    }
  }, []);

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/profile`).then((result) => {
      setProfile(result.data?.data[0]);
    });

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/recipes/profile/me`)
      .then((result) => {
        setRecipeList(result?.data?.data);
      });
  }, [])

  return (
    <div className="profile_page">
      <Navbar />

      <section>
        <div className="d-flex justify-content-center">
          <img
            src={profile?.photo}
            alt="Profile"
            height="150px"
            width="150px"
            className="image-circle"
            style={{ objectFit: "cover" }}
          />
        </div>
        <h1 className="text-center">{profile?.fullname}</h1>
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
          {recipeList.map((item) => (
            <RecipeCard title={item?.name} image={item?.photo} id={item?.id} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Profile;
