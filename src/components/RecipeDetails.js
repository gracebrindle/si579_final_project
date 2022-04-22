import React, {useState} from "react";
import { Button, Modal } from 'react-bootstrap';
import "./RecipeDetails.css";

const RecipeDetails = (props) => {
    const {recipe_id} = props;
    const [recipeInfo, setRecipeInfo] = useState([]);
    const [lgShow, setLgShow] = useState(false);
    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeImage, setRecipeImage] = useState("");
    const [recipeMinutes, setRecipeMinutes] = useState("");
    const [recipeServings, setRecipeServings] = useState("");
    const [recipeWinePairing, setRecipeWinePairing] = useState("");
    const [recipeDiet, setRecipeDiet] = useState([]);
    const [recipeInstructions, setRecipeInstructions] = useState("");
    const [recipeDishType, setRecipeDishType] = useState([]);
    const [recipeIngredients, setRecipeIngredients] = useState([]);

    const recipeIdToShow = (query) => {
        fetch(
            `https://api.spoonacular.com/recipes/${query}/information?${new URLSearchParams({
                apiKey: "190a82499347437ab65f0ebbd7f1680e",
            }).toString()}`
        )
            .then((response) => response.json())
            .then((json) => {
                setRecipeTitle(json.title);
                setRecipeImage(json.image);
                setRecipeMinutes(json.readyInMinutes);
                setRecipeServings(json.servings);  //todo display only when not null;
                setRecipeDiet(json.diets);
                setRecipeWinePairing(json.winePairing["pairingText"])
                setRecipeInstructions(json.instructions);
                setRecipeDishType(json.dishTypes);

                const tempIngredients = [];
                for (let ingredient of json.extendedIngredients) {
                    tempIngredients.push(ingredient.name);
                }
                setRecipeIngredients(tempIngredients);

                setLgShow(true);
                console.log(json)
            });
        }

        return (
            <>
              <Button  className="btn btn-primary" onClick={() => {recipeIdToShow(recipe_id)}}>View Recipe</Button>
              <Modal
                size="lg"
                animation={false}
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    {recipeTitle}
                  </Modal.Title>
                </Modal.Header>
                  <div className="p-2 d-inline-flex flex-wrap">
                    <div className="m-2 solid-tag">{recipeDishType.join(', ')}</div>
                    <div className="m-2 d-inline-flex outline-tag">{recipeMinutes} minutes</div>
                    <div className="m-2 outline-tag">{recipeServings} serving(s)</div>
                  </div>
                <img
                    src={recipeImage}
                    className="recipe-img" alt="..."
                />
                
                <Modal.Body>
                    <p>Compatible with the following diets: {recipeDiet.join(', ')}</p>
                    <h4>Ingredients</h4>
                    <ul>
                    {recipeIngredients.map((ingredient) => (
                        <li>{ingredient}</li>
                    ))}
                    </ul>
                    <h4>Instructions</h4>
                    <p>{recipeInstructions}</p>
                    <h4>Wine Pairing</h4>
                    <p>{recipeWinePairing}</p>
                </Modal.Body>
              </Modal>
            </>
          );
        }

export default RecipeDetails;