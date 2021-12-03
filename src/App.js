import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Recette from './Recette';

function App() {

  const APP_ID = "84895ca3";
  const APP_KEY = "748b8ec36cc6e3073ba0d9d0e4450e0c	";

  const [recettes, setRecettes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect( () => {
      getRecettes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    const getRecettes = async () =>{
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecettes(data.hits);
      console.log(data.hits);
    };

    const updateSearch = e => {
      setSearch(e.target.value);
      console.log(search);
    }

    const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }

  return (
    <div className="App">
      <br/>
      <div className='titre'>
        <h2>Recettes de menus</h2>
      </div>
      <br/>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-btn" type="submit"> Rechercher une recette</button>
      </form>
      <br/> 
          <div className='container'>
            {recettes.map(recette =>(
            <Recette 
              key = {recette.recipe.label}
              titre = {recette.recipe.label}
              calorie = {recette.recipe.calories}
              image = {recette.recipe.image}
              ingredients = {recette.recipe.ingredients}
            />
            ))}
          </div>
    </div>
  );
}

export default App;
