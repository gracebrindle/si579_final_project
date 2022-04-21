import React from "react";
import './InputGroup.css'
import './PantryItems.js'
import PantryItems from "./PantryItems";

const InputGroup = (props) => {
  // Define props that were passed in through App
  const {
    setIngredient,
    ingredient,
    setIncludeIngredientsValue,
    includeIngredientsValue,
    setRecipesResults,
    setNoResults,
    setLoading
  } = props;

 // Add input ingredient to the list of ingredients to include
  function addIngredient(ingredient) {
    setIncludeIngredientsValue((currentIngredients) => {
      return [
        {
          ingredient_name: ingredient,
          created: Date.now()
        },
        ...currentIngredients,
      ];
    });
  }

  function removeIngredient(created) {
    setIncludeIngredientsValue((previousIngredients) => {
      const withItemRemoved = previousIngredients.filter((item) => {
        return item.created !== created
      });
      return withItemRemoved;
    });
  }

  // Clear all ingredients
  function clearIngredients() {
    setIncludeIngredientsValue(() => {
      const ingredientList = []
      return ingredientList
    })
  }


  // Fetch rhymes from API using the input values
  const SearchRecipes = () => {
    setLoading(true)
    let ingredientNames = []

    for (let item in includeIngredientsValue) {
      ingredientNames.push(item. ingredient_name)
  }

      // Fix search query so it searches only ingredient names (not keys)
      fetch(
      `https://api.spoonacular.com/recipes/complexSearch?${new URLSearchParams({
        includeIngredients: ingredientNames.join(','),
        apiKey: '190a82499347437ab65f0ebbd7f1680e',
      }).toString()}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setLoading(false)
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
    <div className="search-input">
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
            onClick={()=>addIngredient(ingredient)}>
            Add Ingredient
          </button>
        </div>
      </div>

      <div className="pantry-items">
      <div className="p-2 d-flex bd-highlight">
        <div className="me-auto bd-highlight">
          <h5>Pantry Items</h5>
        </div>
      </div>

      { typeof(includeIngredientsValue) == 'object' ?
          includeIngredientsValue.map((ingredient) =>
            <PantryItems
                key={ingredient.created}
                ingredient={ingredient.ingredient_name}
                includeIngredientsValue={includeIngredientsValue}
                setIncludeIngredientsValue={setIncludeIngredientsValue}
                remove={() => removeIngredient(ingredient.created)}
            />
        )
          :<PantryItems
              ingredient={ingredient}
              includeIngredientsValue={includeIngredientsValue}
              setIncludeIngredientsValue={setIncludeIngredientsValue}
              remove={() => removeIngredient(ingredient)}
          />
      }

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
    </div>
  );
};
export default InputGroup;
