import { data } from "../Pages/Home";
import { useParams } from "react-router-dom";
import styles from "../Styles/recipe.module.css";

const Recipe = () => {
  const { id } = useParams();

  return (
    <div className={styles.recipe}>
      <div className={styles.top}>
        <h1>{data[id].recipe.label}</h1>
        <img className={styles.img} src={data[id].recipe.image} />
        <ul>
          <li>
            <b>Meal type:-</b> {data[id].recipe.mealType}
          </li>
          <li>
            <b>Cuisine Type:-</b> {data[id].recipe.cuisineType}
          </li>
          <li>
            <b>Calories:-</b> {data[id].recipe.calories}
          </li>
          <li>
            <b>Dish type:-</b> {data[id].recipe.dishType}
          </li>
        </ul>
      </div>

      <ul>
        <h2>Ingredients</h2>
        {Object.values(data[id].recipe.ingredients).map((element) => {
          return <li>{element.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Recipe;
