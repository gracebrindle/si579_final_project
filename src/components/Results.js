import React from "react";
import "./Results.css";

const Results = (props) => {
  const { noResults, recipesResults } = props;
  let output = [];

  if (noResults) {
    output = [];
  } else {
    recipesResults.results.forEach((recipe) => {
      let imageSource = recipe["image"];
      let recipeTitle = recipe["title"];

      output.push(
        <div className="mt-3" key={Math.random()}>
          <div className="card">
            <img src={imageSource} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{recipeTitle}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p>Ready in Minutes</p>
              <a href="#" className="btn btn-primary">
                View Recipe
              </a>
            </div>
          </div>
        </div>
      );
    });
  }

  return <div className="row row-cols-md-3">{output}</div>;
};

export default Results;
