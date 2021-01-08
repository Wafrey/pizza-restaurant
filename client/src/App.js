import React, { useState } from "react";
import { Navbar } from "./navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { Order } from './Order/Order';

function App() {
  const [openFood, setOpenFood] = useState();
  return (
    <>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Order/>
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
