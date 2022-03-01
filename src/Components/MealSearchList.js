import MealCard from "./MealCard";
import { Row } from "react-bootstrap";

const MealSearchList = (props) => {
    return (
      <Row xs={1} md={2} lg={3} className="g-4">
        {props.mealList.map((item) => {
          return (
            <MealCard
              id={item.idMeal}
              mealimg={item.strMealThumb}
              title={item.strMeal}
              category={item.strCategory}
              desc={item.strInstructions}
              youtube={item.strYoutube}
              origin={item.strArea}
            />
          );
        })}
      </Row>
    );
}
 
export default MealSearchList;