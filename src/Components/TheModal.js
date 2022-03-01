import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const RecipeInstructionsModal = (props) => {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.Show}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter lead">
            Meal Name: {props.clickedMealName} <br></br>
            Origin: {props.clickedMealOrigin}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.clickedMealRecipe}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.Hide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}
 
export default RecipeInstructionsModal;