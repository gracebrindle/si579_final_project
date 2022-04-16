import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InputGroup from "./components/InputGroup"
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
  const [noResults, setNoResults] = useState(false);

  return (
    <main className="container">
      <div className="logo">
      <img src={require('./logo.png')} />
      </div>

      <InputGroup>
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
      </InputGroup>
      {/* temporary spot to work on card formatting */}
      <div className="mt-5 container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg"
                className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">Recipe title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p>Ready in Minutes</p>
                <a href="#" className="btn btn-primary">View Recipe</a>
              </div>
            </div>
            </div>
            <div className="col">
            <div className="card">
              <img src="https://assets.bonappetit.com/photos/62154b9846c5f5cb1103c4f0/3:4/w_748%2Cc_limit/20220215%2520Vegan%2520Vodka%2520Pasta_LEDE.jpg"
                className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">Recipe title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p>Ready in Minutes</p>
                <a href="#" className="btn btn-primary">View Recipe</a>
              </div>
            </div>
            </div>
            <div className="col">
            <div className="card">
              <img src="https://post.healthline.com/wp-content/uploads/2018/04/steak-meat-1200x628-facebook-1200x628.jpg"
                className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">Recipe title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                  <p>Ready in Minutes</p>
                <a href="#" className="btn btn-primary">View Recipe</a>
              </div>
            </div>
            </div>
        </div>
      </div>
    </main>
  );
}

export default App;
