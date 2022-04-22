import React, {useState} from "react";
import { Button, Modal } from 'react-bootstrap';


const RecipeDetails = (props) => {
    const {recipeIdToShow} = props
    const [recipeInfo, setRecipeInfo] = useState([]);
    const [lgShow, setLgShow] = useState(false);

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

        return (
            <>
              <Button  className="btn btn-primary" onClick={() => setLgShow(true)}>View Recipe</Button>
              <Modal
                size="lg"
                animation={false}
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Large Modal
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
              </Modal>
            </>
          );
        }

export default RecipeDetails;