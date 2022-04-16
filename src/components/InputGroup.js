import React from "react";

const InputGroup = (props) => {
  // Define props that were passed in through App
  const {
    setQueryValue,
    queryValue,
    setCuisineValue,
    cuisineValue,
    setDietValue,
    dietValue,
    setIntolerancesValue,
    intolerancesValue,
    setIncludeIngredientsValue,
    includeIngredientsValue,
    setExcludeIngredientsValue,
    excludeIngredientsValue,
    setMaxReadyTimeValue,
    maxReadyTimeValue,
    setRecipesResults,
    setNoResults,
  } = props;

  // Fetch rhymes from API using the input values
  const SearchRecipes = () => {
    fetch(
      // Adjust API URL to include the inputValue
      `https://api.spoonacular.com/recipes/complexSearch?${new URLSearchParams({
        query: queryValue,
        cuisine: cuisineValue,
        diet: dietValue,
        intolerances: intolerancesValue,
        includeIngredients: includeIngredientsValue,
        excludeIngredients: excludeIngredientsValue,
        maxReadyTime: maxReadyTimeValue,
      }).toString()}`
    )
      .then((response) => response.json())
      .then((json) => {
        // Check to see if there are results
        if (json.length) {
          setRecipesResults(json);
          setNoResults(false);
        } else {
          setNoResults(true);
        }
      });
  };

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      SearchRecipes();
    }
  };

  return (
    <div className="search">
      <div className="row">
        <div className="input-group col">
          <input
            className="form-control"
            type="text"
            placeholder="Find ingredient"
          />
          <button type="button" className="btn btn-primary">
            Add Ingredient
          </button>
        </div>
      </div>

      <div className="p-2 d-flex bd-highlight">
        <div className="me-auto bd-highlight">
          <h5>Pantry Items</h5>
        </div>
        <div className="bd-highlight">
          <h6>Clear</h6>
        </div>
      </div>

      <div className="p-2 mx-auto d-flex flex-wrap">
        <button
          type="button"
          className="m-1 btn btn-primary btn-sm pantry-item"
        >
          Small button{" "}
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </button>
        <button
          type="button"
          className="m-1 btn btn-primary btn-sm pantry-item"
        >
          Small button{" "}
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </button>
        <button
          type="button"
          className="m-1 btn btn-primary btn-sm pantry-item"
        >
          Small button{" "}
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </button>
        <button
          type="button"
          className="m-1 btn btn-primary btn-sm pantry-item"
        >
          Small button{" "}
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </button>
        <button
          type="button"
          className="m-1 btn btn-primary btn-sm pantry-item"
        >
          Small button{" "}
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </button>
        <button
          type="button"
          className="m-1 btn btn-primary btn-sm pantry-item"
        >
          Small button{" "}
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </button>
      </div>

      <div className="d-flex flex-row-reverse bd-highlight">
        <div className="p-2 bd-highlight">
          <button className="btn btn-primary" type="button">
            Find Recipes
          </button>
        </div>
        <div className="p-2 bd-highlight">
          <button className="btn btn-outline-secondary" type="button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default InputGroup;
