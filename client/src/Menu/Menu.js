import { React, useState } from "react";
import styled from "styled-components";
import { foods, formatPrice } from "./../Data/FoodData";
import { FoodGrid, Food, FoodLabel } from "./FoodGrid";
//import { formatPrice} from '../Data/FoodData'
const MenuStyled = styled.div`
  height: 500px;
  margin: 0 400px 50px 20px;
`;

export function Menu({ setOpenFood }) {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map((food) => (
              <Food
                img={food.img}
                onClick={() => {
                  setOpenFood(food);
                }}
              >
                <FoodLabel>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price)}</div>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
}
