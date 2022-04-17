import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardSkeleton from "./components/CardSkeleton";
import CardRecipe from "./components/CardRecipe";
import InputGroup from "./components/InputGroup"
import Results from "./components/Results"
import React, { useState } from "react";

function App() {
  const [queryValue, setQueryValue] = useState("");
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
        setQueryValue={setQueryValue}
        queryValue={queryValue}

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
        setNoResults = {setNoResults}
      />

      {/* temporary spot to work on card formatting */}
      
      <div className="container">
        <div className="row">
      <div className="mt-5 container">
      <div className="row row-cols-3">
          <div className="col">
            <CardSkeleton />
            </div>
            <div className="col">
            <CardRecipe />
            </div>
            <div className="col">
            <CardRecipe />
            </div>
        </div>
      </div>
    </main>
  );
}

export default App;
