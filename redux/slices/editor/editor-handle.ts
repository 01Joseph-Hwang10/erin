import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Erin } from "erin";

export interface EditorHandleState {
  focusedComponent: number, // if no focused component, -1,
  focusedComponentType: Erin.Editor.ComponentTypes | "none",
  creationPoint: SetCreationPointInput,
  pushComponent?: SetPushComponentInput;
}

const initialState: EditorHandleState = {
  focusedComponent: -1,
  focusedComponentType: "none",
  creationPoint: {
    x: null,
    y: null,
  },
};

export type SetFocusedComponentInput = {
  focusedComponent: number,
  focusedComponentType: Erin.Editor.ComponentTypes | "none"
}

const setFocusedComponentReducer: CaseReducer<
  EditorHandleState,
  PayloadAction<SetFocusedComponentInput>
> = (state, { payload: { focusedComponent, focusedComponentType } }) => {
  state.focusedComponent = focusedComponent;
  state.focusedComponentType = focusedComponentType;
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

export type SetPushComponentInput = (component: Omit<Erin.Editor.ComponentInterface, "id">) => void

const setPushComponentReducer: CaseReducer<
  EditorHandleState,
  PayloadAction<SetPushComponentInput>
> = (state, { payload: pushComponent }) => {
  state.pushComponent = pushComponent;
};

export const {
  reducer,
  actions: {
    setFocusedComponent,
    setCreationPoint,
    setPushComponent
  }
} = createSlice({
  name: "editorSlice",
  initialState,
  reducers: {
    setFocusedComponent: setFocusedComponentReducer,
    setCreationPoint: setCreationPointReducer,
    setPushComponent: setPushComponentReducer
  }
});