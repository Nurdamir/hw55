import React from 'react';
import {PropsMain} from "../../types";
import './Ingredient.css';

const Ingredient: React.FC<PropsMain> = (props) => {
  return (
    <div className="ingred">
      <div onClick={props.addIngr}>
        <img src={props.image} alt={props.item.name}/>
      </div>
      <span className="nameCount">
        <h4>{props.item.name}</h4>
        <span className="countButton">
          <b>x {props.item.count}</b>
      <button onClick={props.deleteIngr}>Delete</button>
        </span>
      </span>
    </div>
  );
};

export default Ingredient;