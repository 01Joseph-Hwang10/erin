import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Erin } from "erin";

type CreationPoint = {
  x: number | null,
  y: number | null
}

type PushComponent = (component: Omit<Erin.Editor.ComponentInterface, "id" | "zIndex">) => void

type ReadComponent = (componentIndex: number) => Erin.Editor.ComponentInterface | null

type NullComponent = (componentIndex: number) => void;

export interface EditorHandleState {
  focusedComponent: number, // if no focused component, -1,
  focusedComponentType: Erin.Common.NonableComponentTypes,
  creationPoint: CreationPoint,
  pushComponent?: PushComponent,
  readComponent?: ReadComponent,
  nullComponent?: NullComponent,
  onDrag: boolean,
  deletionArea: Erin.Common.MinMaxSpec,
  onDeletionArea: boolean
}

const initialState: EditorHandleState = {
  focusedComponent: -1,
  focusedComponentType: "none",
  creationPoint: {
    x: null,
    y: null,
  },
  onDrag: false,
  deletionArea: {
    xmin: 1,
    ymin: 1,
    xmax: 1,
    ymax: 1,
  },
  onDeletionArea: false
};

export type SetFocusedComponentInput = {
  focusedComponent: number,
  focusedComponentType: Erin.Common.NonableComponentTypes
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

// export type SetReadComponentInput = ReadComponent

// const setReadComponentReducer: CaseReducer<
// EditorHandleState,
// PayloadAction<SetReadComponentInput>
// > = (state, { payload: readComponent }) => {
// state.readComponent = readComponent;
// };

export type SetNullComponentInput = NullComponent

const setNullComponentReducer: CaseReducer<
EditorHandleState,
PayloadAction<SetNullComponentInput>
> = (state, { payload: nullComponent }) => {
  state.nullComponent = nullComponent;
};

export type SetOnDragInput = boolean

const setOnDragReducer: CaseReducer<
  EditorHandleState,
  PayloadAction<SetOnDragInput>
> = (state, { payload: onDrag }) => {
  state.onDrag = onDrag;
};

export type SetDeletionAreaInput = Erin.Common.MinMaxSpec

const setDeletionAreaReducer: CaseReducer<
  EditorHandleState,
  PayloadAction<SetDeletionAreaInput>
> = (state, { payload: deletionArea }) => {
  state.deletionArea = deletionArea;
};

export type SetOnDeletionAreaInput = boolean

const setOnDeletionAreaReducer: CaseReducer<
  EditorHandleState,
  PayloadAction<SetOnDeletionAreaInput>
> = (state, { payload: onDeletionArea }) => {
  state.onDeletionArea = onDeletionArea;
};

export const {
  reducer,
  actions: {
    setFocusedComponent,
    setCreationPoint,
    setPushComponent,
    setOnDrag,
    // setReadComponent,
    setNullComponent,
    setDeletionArea,
    setOnDeletionArea,
  }
} = createSlice({
  name: "editorSlice",
  initialState,
  reducers: {
    setFocusedComponent: setFocusedComponentReducer,
    setCreationPoint: setCreationPointReducer,
    setPushComponent: setPushComponentReducer,
    setOnDrag: setOnDragReducer,
    // setReadComponent: setReadComponentReducer,
    setNullComponent: setNullComponentReducer,
    setDeletionArea: setDeletionAreaReducer,
    setOnDeletionArea: setOnDeletionAreaReducer,
  }
});