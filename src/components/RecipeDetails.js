import React, {useState} from "react";

const RecipeDetails = (props) => {
    const {recipeIdToShow} = props
    const [recipeInfo, setRecipeInfo] = useState([]);

    console.log(recipeIdToShow)

        // fetch(
        //     `https://api.spoonacular.com/recipes/${recipeIdToShow}/information${new URLSearchParams({
        //         apiKey: '122cfed9ea8e4f779d5e8580866a6e86',
        //     }).toString()}`
        // )
        //     .then((response) => response.json())
        //     .then((json) => {
        //         setRecipeInfo(json);
        //         console.log(recipeInfo)
        //     });

        return(
            <div>
                <p>recipe details</p>
            </div>
        )
    }

export default RecipeDetails