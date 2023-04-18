import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { punkapi } from "shared/api";

interface IInitialState {
  beers: punkapi.beer.IBeer[] | null;
  beersIsLoading: boolean;
  selectedBeer: punkapi.beer.IBeer | null;
}

const initialState: IInitialState = {
  beers: null,
  beersIsLoading: true,
  selectedBeer: null,
};

export const beersModel = createSlice({
  name: "beers",
  initialState,
  reducers: {
    setSelectedBeer: (state, { payload }: PayloadAction<punkapi.beer.IBeer>) => {
      state.selectedBeer = payload;
    },
    setBeers: (state, { payload }: PayloadAction<punkapi.beer.IBeer[]>) => {
      state.beers = payload;
    },
    setBeersIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.beersIsLoading = payload;
    },
  },
});