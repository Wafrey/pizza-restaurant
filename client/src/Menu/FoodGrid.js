import styled from "styled-components";
import { Title } from "./../Styles/Title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 5px;
`;

export const Food = styled(Title)`
  height: 250px;
  padding: 10px;
  font-size: 30px;
  border-radius: 20px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  transition-property: box-shadow margin-top filter;
  transition-duration: 0.3s;
  margin-top: 5px;
  box-shadow: 0px 0px 2px 0px grey;
  filter: contrast(70%);
  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    margin-top: 0px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 10px 0px grey;
  }
`;
