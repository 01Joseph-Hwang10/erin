import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export interface RectSpecType {
    width: number,
    height: number,
}

export interface SetScreenSpecInput extends RectSpecType {}

const setScreenSpecReducer: CaseReducer<
ScreenState,
PayloadAction<SetScreenSpecInput>
> = (state, { payload: screenSpec }) => {
  state.screenSpec = screenSpec;
};

interface ScreenState {
    screenSpec: RectSpecType
}

const initialState: ScreenState = {
  screenSpec: {
    width: 1,
    height: 1
  }
};

export const {
  reducer,
  actions: {
    setScreenSpec
  }
} = createSlice({
  name: "screenSlice",
  initialState,
  reducers: {
    setScreenSpec: setScreenSpecReducer
  }
});