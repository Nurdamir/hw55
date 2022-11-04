import React from 'react';

interface Props {
  allIngredients: string[];
  // meat: String;
  // cheese: String;
  // salad: String;
  // bacon: String;
}

const Burger:React.FC<Props> = (props) => {
  let key = 0;



  return (
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {props.allIngredients.map((ingr) => {
          if (ingr === 'Meat') {
              key++;
            return <div className="Meat" key={key}></div>
          } else if (ingr === 'Cheese') {
            key++;
            return <div className="Cheese" key={key}></div>
          } else if (ingr === 'Bacon') {
            key++;
            return <div className="Bacon" key={key}></div>
          } else if (ingr === 'Salad') {
            key++;
            return <div className="Salad" key={key}></div>
          }
        })}
        <div className="BreadBottom"></div>
      </div>
      

  );
};

export default Burger;