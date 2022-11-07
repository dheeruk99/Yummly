import styles from "../Styles/card.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
  return (
    <div className={styles.badge}>
      <div className={styles.card}>
        <img
          className={styles.img}
          src={recipe.recipe.image}
          alt={recipe.recipe.label}
        />
        <div>
          <h2>{recipe.recipe.label}</h2>

          <Link to={`Recipe/${recipe.id}`}>
            <button className={styles.btn}>See More...</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Card;
