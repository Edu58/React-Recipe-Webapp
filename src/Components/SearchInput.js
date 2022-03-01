import { useRef, useState } from "react";
import { InputGroup, FormControl, Button, Alert } from "react-bootstrap";
import axios from "axios";
import MealSearchList from "./MealSearchList";

const SearchBar = () => {
    const [searchError, setSearchError] = useState('');
    const [results, setResults] = useState('');

    const mealNameInputRef = useRef();

    function searchMeal() {
        const mealToSearch = mealNameInputRef.current.value
        
        try {
            if (mealToSearch !== "") {
              setSearchError('')
              axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealToSearch}`)
              .then(data => {
                  const mealsResults = data.data.meals

                  if (!mealsResults) {
                    setSearchError("could not find meal try again !!!");
                  } else {
                    setResults(mealsResults);
                    console.log(mealsResults);
                  }
                  
              })
            }
        } catch (error) {
            console.error(error)
            setSearchError('could not find meal try again !!!');
        }
    }

    return (
      <div className="d-flex justify-content-center flex-column align-items-center">
        <InputGroup className="my-3 w-50">
          <FormControl
            placeholder="Enter meal name"
            aria-label="meal name"
            aria-describedby="basic-addon2"
            ref={mealNameInputRef}
          />
          <Button id="basic-addon2" onClick={searchMeal}>
            Search
          </Button>
        </InputGroup>

        {searchError &&
          <Alert variant="danger" className="w-50 text-center">
            {searchError}
          </Alert>
        }

        {results && <MealSearchList mealList={results} />}
      </div>
    );
}
 
export default SearchBar;