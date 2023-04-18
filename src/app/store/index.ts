import { configureStore } from "@reduxjs/toolkit";

import { beersModel } from "entities/beers";
import { navModel } from "entities/navigation";


export const store = configureStore({
  reducer: {
    navs: navModel.reducer,
    beers: beersModel.reducer,
  },
});