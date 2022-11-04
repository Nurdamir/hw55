import React, {useState} from 'react';
import './App.css';
import {IngredientType} from "../types";

import meatImage from "../assets/meat.jpeg";
import cheeseImage from '../assets/cheese.jpeg';
import beconImage from '../assets/becon.jpeg';
import saladeImage from '../assets/salade.jpeg';
import Ingredient from "../components/Ingredients/Ingredient";
import {PropsMain} from "../types";
import Burger from "../components/Burger/Burger";

const INGREDIENTS: IngredientType[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Bacon', price: 60, image: beconImage},
  {name: 'Salad', price: 10, image: saladeImage},
];

const allIngrName: string[] = [];

function App() {
  const [ingredient, setIngredient] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Bacon', count: 0},
    {name: 'Salad', count: 0},
  ]);

  const amountIngPlus = (nameIng: string) => {
    setIngredient(prev => prev.map(ingr => {
      if (ingr.name === nameIng) {
        allIngrName.push(ingr.name);
        return {
          ...ingr,
          count: ingr.count++
        }
      }

        return ingr;
    }))

  };

  const amountIngDelete = (nameIng: string) => {
    setIngredient(prev => prev.map(ingr => {
      if (ingr.name === nameIng) {
        allIngrName.splice(1, 1);
        return {
          ...ingr,
          count: 0
        }
      }
      return ingr;
    }))
  };



    return (
    <div className="App">
      <div className="ingredients">
        <p>Ingredients</p>
        {ingredient.map((item, index) => {
          let url = (INGREDIENTS.filter(t => t.name === item.name))[0].image;
          return (
            <Ingredient
              key={index}
              item={item}
              image={url}
              addIngr={() => amountIngPlus(item.name)}
              deleteIngr={() => amountIngDelete(item.name)}
            />
          )
        })}
      </div>

      <Burger allIngredients={allIngrName}/>
    </div>
  );
}

export default App;
