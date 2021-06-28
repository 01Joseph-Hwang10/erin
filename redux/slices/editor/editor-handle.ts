import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EditorHandleState {
  focusedComponent: number, // if no focused component, -1,
  creationPoint: SetCreationPointInput,
  autoZIndex: number
}

const initialState: EditorHandleState = {
  focusedComponent: -1,
  creationPoint: {
    x: null,
    y: null,
  },
  autoZIndex: 3
};

export type SetFocusedComponentInput = number;

const setFocusedComponentReducer: CaseReducer<
  EditorHandleState,
  PayloadAction<SetFocusedComponentInput>
> = (state, { payload: focusedComponent }) => {
  state.focusedComponent = focusedComponent;
};

export type SetCreationPointInput = {
  x: number | null,
  y: number | null,
}

const setCreationPointReducer: CaseReducer<
  EditorHandleState,
  PayloadAction<SetCreationPointInput>
> = (state, { payload: creationPoint }) => {
  state.creationPoint = creationPoint;
};

export type SetAutoZIndexInput = number;

const setAutoZIndexReducer: CaseReducer<
  EditorHandleState,
  PayloadAction<SetAutoZIndexInput>
> = (state, { payload: autoZIndex }) => {
  state.autoZIndex = autoZIndex;
};

export const {
  reducer,
  actions: {
    setFocusedComponent,
    setCreationPoint,
    setAutoZIndex
  }
} = createSlice({
  name: "editorSlice",
  initialState,
  reducers: {
    setFocusedComponent: setFocusedComponentReducer,
    setCreationPoint: setCreationPointReducer,
    setAutoZIndex: setAutoZIndexReducer
  }
});