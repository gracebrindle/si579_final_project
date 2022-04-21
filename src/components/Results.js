import React, {useState} from "react";
import './Results.css';
import RecipeDetails from "./RecipeDetails";

const Results = (props) => {
    const {
        noResults,
        recipesResults
    } = props;
    let output = [];
    const [recipeIdToShow, setRecipeIdToShow] = useState("");

    if (noResults) {
        output=[]
    }
    else {
        recipesResults.results.forEach(recipe => {
            let recipe_id = recipe["id"];
            let imageSource = `https://spoonacular.com/recipeImages/${recipe_id}-636x393.jpg`
            let recipeTitle = recipe["title"];

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

                            <a href="#" className="btn btn-primary" onClick={()=>setRecipeIdToShow(recipe_id)}>View Recipe</a>
                        </div>
                    </div>
                </div>
            )
        })
    }

  return (
      <div>
      <div className="row row-cols-md-3">{output}</div>
          {recipeIdToShow != "" ? <RecipeDetails>
              recipeIdToShow = {recipeIdToShow}
          </RecipeDetails>: ""}

      </div>
  );
};

export default Results;
