import { func } from "prop-types";
import React, { useEffect, useState } from "react";
import { getRecipes } from "../api";
import Card from "../Components/Card";
import styles from "../Styles/home.module.css";

const Home = () => {
  const [input, setInput] = useState("shake");
  const [recipes, setrecipies] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await getRecipes(input);

      setrecipies(response.data);
    };
    fetchRecipe();
  }, [input]);

  function Change(e) {
    e.preventDefault();
    setInput(e.target.elements.Search.value);
  }

  return (
    <div>
      <h1>Recipe Search</h1>
      <form onSubmit={Change}>
        <input
          name="Search"
          className={styles.search}
          type="search"
          placeholder="Search a recipe"
        />
        <button className={styles.btn}>Search</button>
      </form>
      <div className={styles.list}>
        {recipes.map((recipe, index) => (
          <Card recipe={recipe} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
