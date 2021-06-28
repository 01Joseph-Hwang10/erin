import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EditorAnimationState {
    animationMode: boolean
}

const initialState: EditorAnimationState = {
  animationMode: false
};

export type SetAnimationModeInput = boolean

const setAnimationModeReducer: CaseReducer<
    EditorAnimationState,
    PayloadAction<SetAnimationModeInput>
> = (state, { payload: animationMode }) => {
  state.animationMode = animationMode;
};

export const {
  reducer,
  actions: {
    setAnimationMode
  }
} = createSlice({
  name: "editorSlice",
  initialState,
  reducers: {
    setAnimationMode: setAnimationModeReducer
  }
});