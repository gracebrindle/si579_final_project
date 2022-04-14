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
      <div className="d-flex flex-row">
      <div className="d-flex justify-content-start"><h5>Pantry Items</h5></div>
      <div className="d-flex justify-content-end"><h6>Clear</h6></div>

    </div>
            <div className="col">
            <button type="button" className="btn btn-primary btn-sm">Small button <button type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button></button>
            </div>


      <div className="searchbuttons">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-outline-secondary me-md-2" type="button">
            Reset
          </button>
          <button className="btn btn-primary" type="button">
            Find Recipes
          </button>
        </div>
      </div>
    </div>
  );
};
export default InputGroup;
