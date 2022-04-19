import React from "react";
import './InputGroup.css'
import './PantryItems.js'
import PantryItems from "./PantryItems";

const InputGroup = (props) => {
  // Define props that were passed in through App
  const {
    setIngredient,
    ingredient,
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
    recipesResults,
    setNoResults,
  } = props;


  function addIngredient(ingredient) {
    setIncludeIngredientsValue((includeIngredientsValue) => {
      const ingredientList = [ingredient,
        ...includeIngredientsValue
      ]
      console.log("Ingredient List: " + ingredientList)
      return ingredientList
    })
  }

  function removeIngredient(ingredient) {

  }

  function clearIngredients() {
    setIncludeIngredientsValue(() => {
      const ingredientList = []
      return ingredientList
    })
  }


  // Fetch rhymes from API using the input values
  const SearchRecipes = () => {
    fetch(
      // Adjust API URL to include the inputValue
      `https://api.spoonacular.com/recipes/complexSearch?${new URLSearchParams({
        // cuisine: cuisineValue,
        // diet: dietValue,
        // intolerances: intolerancesValue,
        includeIngredients: includeIngredientsValue.join(','),
        // excludeIngredients: excludeIngredientsValue,
        // maxReadyTime: maxReadyTimeValue,
        apiKey: '122cfed9ea8e4f779d5e8580866a6e86',
      }).toString()}`
    )
      .then((response) => response.json())
      .then((json) => {
        // Check to see if there are results
        console.log("API Results:")
        console.log(json)
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
      addIngredient(ingredient);
    }
  };


  // Example code for auto completion for finding ingriendients. 
  // const SelectionsExample = (props) => (
  //   <Typeahead
  //     clearButton
  //     defaultSelected={options.slice(0, 1)}
  //     id="selections-example"
  //     labelKey="name"
  //     onInputChange={(text, e) => { console.log(text, e); }}
  //     options={options}
  //     placeholder="Choose a state..."
  //   />
  // );
  

  return (
    <div className="search">
      <div className="row">
        <div className="input-group col">
          <input
            className="form-control"
            value={ingredient}
            onChange={(event) => setIngredient(event.target.value)}
            onKeyDown={keyDownHandler}
            type="text"
            placeholder="Find ingredient"
          />


          <button
            type="button"
            className="btn btn-primary"
            onClick={()=>addIngredient(ingredient)}
          >
            Add Ingredient
          </button>
        </div>
      </div>

      <div className="p-2 d-flex bd-highlight">
        <div className="me-auto bd-highlight">
          <h5>Pantry Items</h5>
        </div>
      </div>

      <PantryItems
          ingredient={ingredient}
      />

      <div className="d-flex flex-row-reverse bd-highlight">
        <div className="p-2 bd-highlight">
          <button className="btn btn-primary" type="button" onClick={SearchRecipes}>
            Find Recipes
          </button>
        </div>

        <div className="p-2 bd-highlight">
          <button className="btn btn-outline-secondary" type="button" onClick={clearIngredients}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default InputGroup;
