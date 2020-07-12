import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
  const App_id = "ee00d1d2";
  const App_secret_key ="9b3d06724b81766ce7cfdefb798dd282";
  
  
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query, setQuery] = useState("beef");
  useEffect(() => {
    getRecipe();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
    
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  const getRecipe = async () => {
    const API_call = `https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_secret_key}&from=0&to=50`;
    const respond = await fetch(API_call);
    const data = await respond.json();
    console.log(data);
    setRecipes(data.hits);
  }
  return (
    <div className="App">
      <h1 className="title">Recipe Search</h1>
      <form action="" className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" name="" id="" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
        
      </form>
      <div className="recipes">
      {
        recipes.map((recipe,id) => (
          <Recipe key={id} title={recipe.recipe.label} 
          calories ={Math.round(recipe.recipe.calories)} 
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          healthLabels = {recipe.recipe.healthLabels}
          dietLabels = {recipe.recipe.dietLabels}
          cautions = {recipe.recipe.cautions}
          />
        ))
      }
      </div>
     
    </div>
  );
}

export default App;
