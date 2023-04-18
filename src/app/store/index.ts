import { configureStore } from "@reduxjs/toolkit";

import { navModel } from "entities/navigation";

export const store = configureStore({
  reducer: {
    navs: navModel.reducer,
  },
});