import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import "./App.css";
import CardSkeleton from "./components/CardSkeleton";
import InputGroup from "./components/InputGroup"
import Results from "./components/Results"
import React, { useState } from "react";

function App() {
  const [ingredient, setIngredient] = useState("");
  const [cuisineValue, setCuisineValue] = useState("");
  const [dietValue, setDietValue] = useState("");
  const [intolerancesValue, setIntolerancesValue] = useState("");
  const [includeIngredientsValue, setIncludeIngredientsValue] = useState("");
  const [excludeIngredientsValue, setExcludeIngredientsValue] = useState("");
  const [maxReadyTimeValue, setMaxReadyTimeValue] = useState("");
  const [recipesResults, setRecipesResults] = useState([]);
  const [noResults, setNoResults] = useState(true);

  return (
    <main>
      <div className="d-flex justify-content-center logo">
      <img src={require('./logo.png')} />
      </div>

      <InputGroup
        setIngredient={setIngredient}
        ingredient={ingredient}

        setCuisineValue={setCuisineValue}
        cuisineValue={cuisineValue}

        setDietValue={setDietValue}
        dietValue={dietValue}

        setIntolerancesValue={setIntolerancesValue}
        intolerancesValue={intolerancesValue}

        setIncludeIngredientsValue={setIncludeIngredientsValue}
        includeIngredientsValue={includeIngredientsValue}

        setExcludeIngredientsValue={setExcludeIngredientsValue}
        excludeIngredientsValue={excludeIngredientsValue}

        setMaxReadyTimeValue={setMaxReadyTimeValue}
        maxReadyTimeValue={maxReadyTimeValue}

        setRecipesResults = {setRecipesResults}
        recipesResults={recipesResults}

        setNoResults = {setNoResults}
      />

      <div className="mt-5 container">
      <div className="row">
          <div className="mt-3 col-md">
            <CardSkeleton />
            </div>
            <div className="mt-3 col-md">
            <Results />
            </div>
            <div className="mt-3 col-md">
            <Results />
            </div>
        </div>
      </div>
    </main>
  );
}

export default App;
