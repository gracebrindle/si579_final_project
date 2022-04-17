import React from "react";
import "./RecipeCard.css";

const RecipeCard = (props) => {
  return (
    <div className="card">
      <img
        src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Recipe title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p>Ready in Minutes</p>
        <a href="#" className="btn btn-primary">
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
