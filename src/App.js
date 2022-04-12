import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
  <main className="container">
      <h1 className="row">Recipe Finder</h1>
      <div className="row">
          <div className="col">Saved words: <span></span></div>
      </div>
      <div className="row">
          <div className="input-group col">
              <input className="form-control" type="text" placeholder="Enter a word" id="word_input" />
          </div>
      </div>
      <div className="row">
          <h2 className="col" id="output_description"></h2>
      </div>
      <div className=".col-auto">
          <output className="col"></output>
          <button type="button" class="btn btn-outline-secondary">Reset</button>
          <button type="button" className="btn btn-primary">Search</button>
      </div>
  </main>
  );
}

export default App;
