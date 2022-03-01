import './App.css';
import NavigationBar from "./Components/NavbarCP";
import GetRandomMeal from "./Components/RandomMeal";
import SearchBar from './Components/SearchInput';

function App() {
  return (
    <>
      <NavigationBar />
      <SearchBar />
      <GetRandomMeal />
    </>
  );
}

export default App;
