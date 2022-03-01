import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import RecipeInstructionsModal from "./TheModal";


const MealCard = (props) => {
  const [modalShow, setModalShow] = useState(false);

  function showModal() {
    setModalShow(true)
  }

  function hideModal() {
    setModalShow(false)
  }

    return (
      <div className="d-flex justify-content-center">
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={props.mealimg} className="img-fluid" />
          <Card.Body>
            <Card.Title className="fs-4 mb-4">
              Name: {props.title}
            </Card.Title>
            <Card.Text className="lead">Origin: {props.origin}</Card.Text>
            <Card.Text className="lead">Category: {props.category}</Card.Text>

            <Button
              variant="primary"
              className=" btn-sm w-100 mb-2"
              onClick={showModal}
            >
              Recipe
            </Button>

            <Button
              variant="primary"
              href={props.youtube}
              target="_blank"
              className=" btn-sm w-100"
            >
              Video
            </Button>
          </Card.Body>
        </Card>

        <RecipeInstructionsModal
          Show={modalShow}
          Hide={hideModal}
          clickedMealName={props.title}
          clickedMealOrigin={props.origin}
          clickedMealRecipe={props.desc}
        />
      </div>
    );
}
 
export default MealCard;