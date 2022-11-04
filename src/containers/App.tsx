import React, {useState} from 'react';
import {IngredientType} from "../types";
import './App.css';
import meatImage from "../assets/meat.jpeg";
import cheeseImage from '../assets/cheese.jpeg';
import beconImage from '../assets/becon.jpeg';
import saladeImage from '../assets/salade.jpeg';
import Ingredient from "../components/Ingredients/Ingredient";
import Burger from "../components/Burger/Burger";
import TotalPrice from "../components/TotalPrice/TotalPrice";

const INGREDIENTS: IngredientType[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Bacon', price: 60, image: beconImage},
  {name: 'Salad', price: 10, image: saladeImage},
];

function App() {
  const [ingredient, setIngredient] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Bacon', count: 0},
    {name: 'Salad', count: 0},
  ]);

  const amountIngPlus = (nameIng: string) => {
    setIngredient(prev => prev.map(ingr => {
        if (ingr.name !== nameIng) return ingr;
        return {...ingr, count: ingr.count + 1};
      }
    ))
  };

  const amountIngDelete = (nameIng: string) => {
    setIngredient(prev => prev.map(ingr => {
        if (ingr.name !== nameIng) return ingr;
        if (ingr.count === 0) return ingr;
        return {...ingr, count: ingr.count - 1};
      }
    ))
  };

  const totalPrice = INGREDIENTS.reduce((acc, cost) => {
    ingredient.forEach(item => {
      if (cost.name === item.name) {
        acc += cost.price * item.count
      }
    })
    return acc;
  }, 30);

  return (
    <div className="App">
        <div className="ingredients">
          <h4>Ingredients</h4>
          {ingredient.map((item, index) => {
            let url = (INGREDIENTS.filter(pic => pic.name === item.name))[0].image;
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
        <div className={'burPrice'}>
          <h4>Burger</h4>
          <Burger allIngredients={ingredient}/>
          <TotalPrice price={totalPrice}/>
        </div>
    </div>
  );
}

export default App;
