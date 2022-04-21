import React from "react";
import "./PantryItems.css";
import removeIngredient from "./InputGroup.js"


const PantryItems = (props) => {
  const { ingredient,
      index,
        remove} = props;

  return (
    <div className="p-2 d-inline-flex flex-wrap" key={index}>
      <div
        className="d-flex justify-content-start ingredient-tag"
        >
        {ingredient}{" "}
        <button
          type="button"
          onClick={()=>remove(ingredient, index)}
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
