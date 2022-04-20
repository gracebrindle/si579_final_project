import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import "./App.css";
import CardSkeleton from "./components/CardSkeleton";
import InputGroup from "./components/InputGroup"
import Results from "./components/Results"
import React, { useState } from "react";

function App() {
  const [ingredient, setIngredient] = useState("");
  const [includeIngredientsValue, setIncludeIngredientsValue] = useState("");
  const [recipesResults, setRecipesResults] = useState([]);
  const [noResults, setNoResults] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <main>
      <div className="d-flex justify-content-center logo">
      <img src={require('./logo.png')} />
      </div>

      <InputGroup
        setIngredient={setIngredient}
        ingredient={ingredient}

        setIncludeIngredientsValue={setIncludeIngredientsValue}
        includeIngredientsValue={includeIngredientsValue}

        setRecipesResults = {setRecipesResults}
        recipesResults={recipesResults}

        setNoResults = {setNoResults}
        setLoading = {setLoading}
      />

      <div className="mt-5 container">
      <div className="row">

              {loading ? <div className="mt-3 col-md">
              <CardSkeleton />
              </div>: ""
              }
            <div className="mt-3 col-md">

            <Results
                noResults={noResults}
                recipesResults={recipesResults}
                />

            </div>
        </div>
      </div>
    </main>
  );
}

export default App;
