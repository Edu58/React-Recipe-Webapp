import { useRef, useEffect } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import axios from "axios";

const SearchBar = () => {

    const mealNameInputRef = useRef();

    function searchMeal() {
        const mealToSearch = mealNameInputRef.current.value
        
        try {
            if (mealToSearch !== "") {
              axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealToSearch}`)
              .then(data => {
                  const mealsResults = data.data.meals
                  console.log(mealsResults);
              })
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
      <div className="d-flex justify-content-center">
        <InputGroup className="my-3 w-50">
          <FormControl
            placeholder="Enter meal name"
            aria-label="meal name"
            aria-describedby="basic-addon2"
          ref={mealNameInputRef}/>
          <Button id="basic-addon2" onClick={searchMeal}>
            Search
          </Button>
        </InputGroup>
      </div>
    );
}
 
export default SearchBar;