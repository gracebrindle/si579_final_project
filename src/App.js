import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <main className="container">
      <h1 className="text-center">Recipe Finder</h1>
      <div className="search">
        <div className="row">
          <div className="input-group col">
            <input
              className="form-control"
              type="text"
              placeholder="Find ingredient"
            />
            <button type="button" className="btn btn-primary">
            Search
          </button>
          </div>
        </div>
        <div className="row">
          <h5 className="col">Pantry Items</h5>
        </div>
        <div className="row">
          <h5 className="col">Cusines</h5>
        </div>
        <div className="row">
          <h5 className="col">Diet</h5>
        </div>
        <div className="row">
          <h5 className="col">Intollerances</h5>
        </div>
      </div>
      <div className="searchbuttons">
      <div className="row">
        <output className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-secondary">
            Reset
          </button>
          <button type="button" className="btn btn-primary">
            Find Recipes
          </button>
        </output>
      </div>
      </div>

      {/* temporary spot to work on card formatting */}

      <div className="container">
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
                <div className="row">
                  <p>Ready in Minutes</p>
                <a href="#" className="btn btn-primary">View Recipe</a>
                </div>
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
                <div className="row">
                  <p>Ready in Minutes</p>
                <a href="#" className="btn btn-primary">View Recipe</a>
                </div>
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
                <div className="row">
                  <p>Ready in Minutes</p>
                <a href="#" className="btn btn-primary">View Recipe</a>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </main>
  );
}

export default App;
