import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TNavTitles = "Main Page" | "Beers Table" | "My sales" | "Personal Cabinet";

export interface INav {
  id: number;
  title: TNavTitles;
  ref: string;
}

interface IInitialState {
  navs: INav[];
  selectedNav: INav | null;
}

const initialState: IInitialState = {
  navs: [
    { id: 1, title: "Main Page", ref: "/" },
    { id: 2, title: "Beers Table", ref: "/" },
    { id: 3, title: "My sales", ref: "#" },
    { id: 4, title: "Personal Cabinet", ref: "#" },
  ],
  selectedNav: { id: 2, title: "Beers Table", ref: "beersTable" },
};

export const navModel = createSlice({
  name: "navs",
  initialState,
  reducers: {
    setSelectedNav: (state, { payload }: PayloadAction<INav>) => {
      state.selectedNav = payload;
    },
  },
});