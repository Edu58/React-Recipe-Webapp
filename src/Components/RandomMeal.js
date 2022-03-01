import { Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import MealCard from "./MealCard";

const GetRandomMeal = () => {
    const [randomMeal, setRandomMeal] = useState('');
    const [error, setError] = useState('');

    function fetchRandomMeal() {
        try {
          setError('')
          axios
            .get("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((response) => {
              const meal = response.data.meals[0];
              console.log(meal);
              setRandomMeal(meal);
            });
        } catch (error) {
          console.log(error)
          setError("Could not get recipe !!!")
        }
      }

    useEffect(()=>{
        fetchRandomMeal()

    }, [])

    return (
      <>
        <div className="d-flex justify-content-center">
          <Button className="bg-success my-lg-4 my-2" onClick={fetchRandomMeal}>
            Get Random Meal
          </Button>
          {error && <Alert variant="danger">{error}</Alert>}
        </div>

        <MealCard
          id={randomMeal.idMeal}
          mealimg={randomMeal.strMealThumb}
          title={randomMeal.strMeal}
          category={randomMeal.strCategory}
          desc={randomMeal.strInstructions}
          youtube={randomMeal.strYoutube}
          origin={randomMeal.strArea}
        />
      </>
    );
}
 
export default GetRandomMeal;