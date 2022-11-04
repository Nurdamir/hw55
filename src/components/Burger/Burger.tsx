import React from 'react';
import {IngredientsTypeC} from "../../types";
import './Burger.css'
import Meat from "../Ingredients/Meat/Meat";
import Cheese from "../Ingredients/Cheese/Cheese";
import Bacon from "../Ingredients/Bacon/Bacon";
import Salad from "../Ingredients/Salad/Salad";

interface Props {
  allIngredients: IngredientsTypeC[];
}


const Burger: React.FC<Props> = (props) => {
const createDivIngr = () => {
  const arrIngred: JSX.Element[] = [];
  props.allIngredients.forEach(oneIngr => {
    if (oneIngr.name === 'Meat') {
    for (let i = 0; i < oneIngr.count; i++){
      arrIngred.push(<Meat/>);
    }
    } else if(oneIngr.name === 'Cheese') {
      for(let i = 0; i < oneIngr.count; i++) {
        arrIngred.push(<Cheese/>);
      }
    } else if (oneIngr.name === 'Bacon') {
      for(let i = 0; i < oneIngr.count; i++) {
        arrIngred.push(<Bacon/>)
      }
    } else if (oneIngr.name === 'Salad') {
      for(let i = 0; i < oneIngr.count; i++) {
        arrIngred.push(<Salad/>)
      }
    }
  });
  return arrIngred;
}

  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {createDivIngr()}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;