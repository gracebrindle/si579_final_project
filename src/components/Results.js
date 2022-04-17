import React from "react";
import './Results.css';

const Results = (props) => {
    const {
        noResults,
        recipesResults
    } = props;
    let output = [];

    if (noResults) {
        output=[]
    }
    else {
        for (let recipe in recipesResults) {
            let imageSource = recipe["results"]["image"];
            let recipeTitle = recipe["results"]["title"];

            output.push (
                <div className="col">
                    <div className="card">
                        <img
                            src={imageSource}
                            className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{recipeTitle}</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                            <p>Ready in Minutes</p>
                            <a href="#" className="btn btn-primary">View Recipe</a>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <ul>
            {output}
        </ul>
    )
}

export default Results;
