import React, {useState} from "react";
import { Button, Modal } from 'react-bootstrap';

const RecipeDetails = (props) => {
    const {recipe_id} = props;
    const [recipeInfo, setRecipeInfo] = useState([]);
    const [lgShow, setLgShow] = useState(false);
    const [recipeTitle, setRecipeTitle] = useState("");

    const recipeIdToShow = (query) => {
        fetch(
            `https://api.spoonacular.com/recipes/${query}/information?${new URLSearchParams({
                apiKey: "190a82499347437ab65f0ebbd7f1680e",
            }).toString()}`
        )
            .then((response) => response.json())
            .then((json) => {
                setRecipeTitle(json.title);
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
                <Modal.Body>...</Modal.Body>
              </Modal>
            </>
          );
        }

export default RecipeDetails;