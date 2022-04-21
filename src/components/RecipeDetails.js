import React, {useState} from "react";

function RecipeDetails(recipe_id) {
    const [recipeInfo, setRecipeInfo] = useState([]);

        fetch(
            `https://api.spoonacular.com/recipes/${recipe_id}/information${new URLSearchParams({
                apiKey: '122cfed9ea8e4f779d5e8580866a6e86',
            }).toString()}`
        )
            .then((response) => response.json())
            .then((json) => {
                setRecipeInfo(json);
                console.log(recipeInfo)
            });
    }

export default RecipeDetails