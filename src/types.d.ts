import React from "react";

export interface IngredientType {
  name: string;
  price: number;
  image: string;
}


// export interface IngredientsTypeC {
//   name: string,
//   count: number,
// }

export interface PropsMain {
  item: IngredientsTypeC;
  image: string,
  addIngr: React.MouseEventHandler;
  deleteIngr: React.MouseEventHandler;
}