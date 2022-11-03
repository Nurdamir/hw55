import React from 'react';
import {IngredientsTypeC} from "../../types";

interface PropsMain {
  item: IngredientsTypeC;
  image: string,
}


const Ingredient: React.FC<PropsMain> = (props) => {
  return (
    <div className="ingredients">
      <div>
        <img src={props.image} alt={props.item.name}/>
      </div>

      <h4>{props.item.name}</h4>

      <b>{props.item.count}</b>

      <button>delete</button>

    </div>
  );
};

export default Ingredient;