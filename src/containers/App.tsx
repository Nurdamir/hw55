import React, {useState} from 'react';
import './App.css';
import {IngredientType} from "../types";

import meatImage from "../assets/meat.jpeg";
import cheeseImage from '../assets/cheese.jpeg';
import beconImage from '../assets/becon.jpeg';
import saladeImage from '../assets/salade.jpeg';
import Ingredient from "../components/Ingredients/Ingredient";

const INGREDIENTS: IngredientType[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Becon', price: 60, image: beconImage},
  {name: 'Salade', price: 10, image: saladeImage},
];

function App() {
  const [ingredient, setIngredient] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Becon', count: 0},
    {name: 'Salade', count: 0},
  ]);

  return (
    <div className="App">
      <div className="ingredients">
        <p>Ingredients</p>
        {ingredient.map((item, index) => {
         let url = (INGREDIENTS.filter(t => t.name === item.name))[0].image;
          return (
           <Ingredient key={index} item={item} image={url}/>
         )
        })}
      </div>

      <div className="Burger">
        <p>Burger</p>
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        <div className="Salad"></div>
        <div className="Cheese"></div>
        <div className="Meat"></div>
        <div className="BreadBottom"></div>
      </div>
    </div>
  );
}

export default App;
