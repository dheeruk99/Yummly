import styles from "../Styles/card.module.css";
import PropTypes from "prop-types";
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
          <a href="props.url">
            <h2>{recipe.recipe.label}</h2>
          </a>
          <a href="">
            <button className={styles.btn}>See More...</button>
          </a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Card;
