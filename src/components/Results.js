import React, {useState} from "react";
import './Results.css';

const Results = (props) => {
    const {
        noResults,
        recipesResults
    } = props;
    // const [recipeInfo, setRecipeInfo] = useState([]);
    let output = [];

    if (noResults) {
        output=[]
    }
    else {
        recipesResults.results.forEach(recipe => {
            let imageSource = recipe["image"];
            let recipeTitle = recipe["title"];
            // let recipe_id=recipe["id"]

            // fetch(
            //     `https://api.spoonacular.com/recipes/${recipe_id}/information${new URLSearchParams({
            //         apiKey: '122cfed9ea8e4f779d5e8580866a6e86',
            //     }).toString()}`
            // )
            //     .then((response) => response.json())
            //     .then((json) => {
            //         // Check to see if there are results
            //         setRecipeInfo(json);
            //         console.log(recipeInfo)
            //     });

            // let cooking_time = recipeInfo["readyInMinutes"]
            // let summary = recipeInfo["summary"]

            output.push (
                <div className="col" key={Math.random()}>
                    <div className="card">
                        <img
                            src={imageSource}
                            className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{recipeTitle}</h5>
                            {/*<p className="card-text">*/}
                            {/*    {summary}*/}
                            {/*</p>*/}
                            {/*<p>Ready in ${cooking_time} Minutes</p>*/}
                            <a href="#" className="btn btn-primary">View Recipe</a>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <ul>
            {output}
        </ul>
    )
}

export default Results;
