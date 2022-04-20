import React from "react";
import "./PantryItems.css";

const PantryItems = (props) => {
  const { removeIngredient, ingredient } = props;

  return (
    <div className="p-2 d-inline-flex flex-wrap">
      <div
        key={Math.random()}
        className="d-flex justify-content-start ingredient-tag"
        >
        {ingredient}{" "}
        <button
          type="button"
          onClick={removeIngredient}
            // includeIngredientsValue.filter((ingredient) => ingredient.name !== includeIngredientsValue);
          className="d-flex justify-content-end btn-close pantry-close"
          aria-label="Close"
          >
          <span aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default PantryItems;
