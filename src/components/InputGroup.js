import React from "react";
import "./InputGroup.css";
import PantryItems from "./PantryItems";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useState, Fragment } from "react";

const InputGroup = (props) => {
  // Define props that were passed in through App
  const {
    setIngredient,
    ingredient,
    setIncludeIngredientsValue,
    includeIngredientsValue,
    setRecipesResults,
    setNoResults,
    setLoading,
    setRecipeIdToShow,
    recipeIdToShow,
  } = props;

  // Add input ingredient to the list of ingredients to include
  function addIngredient(ingredient) {
    setIncludeIngredientsValue((currentIngredients) => {
      return [
        {
          ingredient_name: ingredient,
          created: Date.now(),
        },
        ...currentIngredients,
      ];
    });
    console.log(includeIngredientsValue);
  }

  function removeIngredient(created) {
    setIncludeIngredientsValue((previousIngredients) => {
      const withItemRemoved = previousIngredients.filter((item) => {
        return item.created !== created;
      });
      return withItemRemoved;
    });
  }

  // Clear all ingredients
  function clearIngredients() {
    setIncludeIngredientsValue(() => {
      const ingredientList = [];
      return ingredientList;
    });
  }

  // Fetch rhymes from API using the input values
  const SearchRecipes = () => {
    setLoading(true);
    setRecipeIdToShow("");
    let ingredientNames = [];
    setLoading(true);

    for (let item of includeIngredientsValue) {
      console.log(item)
      ingredientNames.push(item.ingredient_name);
    }
    console.log(ingredientNames)
    // Fix search query so it searches only ingredient names (not keys)
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?${new URLSearchParams({
        includeIngredients: ingredientNames.join(","),
        apiKey: "190a82499347437ab65f0ebbd7f1680e",
      }).toString()}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setLoading(false);
        // Check to see if there are results
        if (json.results.length) {
          setRecipesResults(json);
          setNoResults(false);
        } else {
          setNoResults(true);
        }
      });
  };

  // Add ingredient when 'enter' key is pressed
  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      if (ingredient) {
        addIngredient(ingredient);
      }
    }
  };

// API request for autocomplete ingridient search
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = (query) => {
    setIsLoading(true);

    fetch(
      `https://api.spoonacular.com/food/ingredients/autocomplete?${new URLSearchParams(
        {
          query: query,
          number: 10,
          apiKey: "190a82499347437ab65f0ebbd7f1680e",
        }
      ).toString()}`
    )
      .then((response) => response.json())
      .then((items) => {
        if (items && items.length) {
          const options = items.map((i) => ({
            name: i.name,
          }));
          setOptions(options);
          setIsLoading(false);
        }
      });
  };

  console.log(options)

  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  return (
    <div className="search-input">
      <div className="row">
        <div className="input-group col">
          <AsyncTypeahead
            className="form-control"
            onChange={(e) => {
              if (e && e.length) {
                {console.log(e); setIngredient(e[0].name);}
              }
            }}
            onKeyDown={keyDownHandler}
            type="text"
            placeholder="Find ingredient"
            id="auto-complete"
            filterBy={filterBy}
            isLoading={isLoading}
            labelKey="name"
            minLength={3}
            onSearch={handleSearch}
            options={options}
            renderMenuItemChildren={(option, props) => (
              <Fragment>
                <button
                  className="btn-add"
                  onClick={() => {console.log(option.name);addIngredient(option.name)}}
                >
                  Add
                </button>
                <span> {option.name}</span>
              </Fragment>
            )}
          />

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              if (ingredient) {
                addIngredient(ingredient);
              }
            }}
          >
            Add Ingredient
          </button>
        </div>
      </div>
      {includeIngredientsValue.length != 0 ? (
        <div className="pantry-items">
          <div className="p-2 d-flex bd-highlight">
            <div className="me-auto bd-highlight">
              <h5>Pantry Items</h5>
            </div>
          </div>

          
            {includeIngredientsValue.map((ingredient) => (
              <PantryItems
                key={ingredient.created}
                ingredient={ingredient.ingredient_name}
                includeIngredientsValue={includeIngredientsValue}
                setIncludeIngredientsValue={setIncludeIngredientsValue}
                remove={() => removeIngredient(ingredient.created)}
              />
            ))}

          {/* {typeof includeIngredientsValue == "object" ? (
            includeIngredientsValue.map((ingredient) => (
              <PantryItems
                key={ingredient.created}
                ingredient={ingredient.ingredient_name}
                includeIngredientsValue={includeIngredientsValue}
                setIncludeIngredientsValue={setIncludeIngredientsValue}
                remove={() => removeIngredient(ingredient.created)}
              />
            ))
          ) : (
            <PantryItems
              ingredient={ingredient}
              includeIngredientsValue={includeIngredientsValue}
              setIncludeIngredientsValue={setIncludeIngredientsValue}
              remove={() => removeIngredient(ingredient)}
            />
          )} */}

          <div className="d-flex flex-row-reverse bd-highlight">
            <div className="p-2 bd-highlight">
              <button
                className="btn btn-primary"
                type="button"
                onClick={SearchRecipes}
              >
                Find Recipes
              </button>
            </div>

            <div className="p-2 bd-highlight">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={clearIngredients}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default InputGroup;
