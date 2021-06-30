import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Erin } from "erin";

type CreationPoint = {
  x: number | null,
  y: number | null
}

type PushComponent = (component: Omit<Erin.Editor.ComponentInterface, "id" | "zIndex">) => void

export interface EditorHandleState {
  focusedComponent: number, // if no focused component, -1,
  focusedComponentType: Erin.Editor.ComponentTypes | "none",
  creationPoint: CreationPoint,
  pushComponent?: PushComponent,
  onDrag: boolean,
}

const initialState: EditorHandleState = {
  focusedComponent: -1,
  focusedComponentType: "none",
  creationPoint: {
    x: null,
    y: null,
  },
  onDrag: false,
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

export type SetCreationPointInput = CreationPoint

const setCreationPointReducer: CaseReducer<
  EditorHandleState,
  PayloadAction<SetCreationPointInput>
> = (state, { payload: creationPoint }) => {
  state.creationPoint = creationPoint;
};

export type SetPushComponentInput = PushComponent

const setPushComponentReducer: CaseReducer<
  EditorHandleState,
  PayloadAction<SetPushComponentInput>
> = (state, { payload: pushComponent }) => {
  state.pushComponent = pushComponent;
};

export type SetOnDragInput = boolean

const setOnDragReducer: CaseReducer<
  EditorHandleState,
  PayloadAction<SetOnDragInput>
> = (state, { payload: onDrag }) => {
  state.onDrag = onDrag;
};

export const {
  reducer,
  actions: {
    setFocusedComponent,
    setCreationPoint,
    setPushComponent,
    setOnDrag,
  }
} = createSlice({
  name: "editorSlice",
  initialState,
  reducers: {
    setFocusedComponent: setFocusedComponentReducer,
    setCreationPoint: setCreationPointReducer,
    setPushComponent: setPushComponentReducer,
    setOnDrag: setOnDragReducer,
  }
});