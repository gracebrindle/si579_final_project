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
      return [ingredient,
        ...currentIngredients]
    })
    console.log(includeIngredientsValue)
  }

  // // Remove individual ingredient
  // const removeIngredient = (ingredient) => {
  //   setIncludeIngredientsValue((previousIngredients) => {
  //     const withItemRemoved = previousIngredients.filter((ingredient) => {
  //       return item.key !== key
  //     });
  //     return withItemRemoved;
  //   });
  //   console.log(includeIngredientsValue)
  // }

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
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?${new URLSearchParams({
        includeIngredients: includeIngredientsValue.join(','),
        apiKey: '190a82499347437ab65f0ebbd7f1680e',
      }).toString()}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("API Results:")
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
            onClick={()=>addIngredient(ingredient)}>
            Add Ingredient
          </button>
        </div>
      </div>

      <div className="p-2 d-flex bd-highlight">
        <div className="me-auto bd-highlight">
          <h5>Pantry Items</h5>
        </div>
      </div>

      { typeof(includeIngredientsValue) == 'object' ?
          includeIngredientsValue.map((ingredient, index) =>
            <PantryItems
                key={index}
                ingredient={ingredient}
                includeIngredientsValue={includeIngredientsValue}
                setIncludeIngredientsValue={setIncludeIngredientsValue}
                // remove={() => removeIngredient(ingredient.key)}
            />
        )
          :<PantryItems
              ingredient={ingredient}
              includeIngredientsValue={includeIngredientsValue}
              setIncludeIngredientsValue={setIncludeIngredientsValue}
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
  );
};
export default InputGroup;
