import { NonableShape } from "@components/common/shapes/shape.types";
import { FontStyles } from "@components/editor/bottom-float/font-style-members/font-style.data";
import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

type ColorConsumer = "textFontColor" | "textBackgroundColor" | null

interface EditorStatesState {
    fontStyle: FontStyles | null,
    pickedColor: string | null,
    textOnEdit: boolean,
    colorConsumer: ColorConsumer,
    backgroundShape: NonableShape
}

const initialState: EditorStatesState = {
  fontStyle: null,
  pickedColor: null,
  textOnEdit: false,
  colorConsumer: null,
  backgroundShape: "none"
};

export type SetFontStyleStateInput = FontStyles | null

const setFontStyleStateReducer: CaseReducer<
    EditorStatesState,
    PayloadAction<SetFontStyleStateInput>
> = (state, { payload: fontStyle }) => {
  state.fontStyle = fontStyle;
};

export type SetPickedColorStateInput = string | null

const setPickedColorStateReducer: CaseReducer<
    EditorStatesState,
    PayloadAction<SetPickedColorStateInput>
> = (state, { payload: pickedColor }) => {
  state.pickedColor = pickedColor;
};

export type SetTextOnEditStateInput = boolean

const setTextOnEditStateReducer: CaseReducer<
    EditorStatesState,
    PayloadAction<SetTextOnEditStateInput>
> = (state, { payload: textOnEdit }) => {
  state.textOnEdit = textOnEdit;
};

export type SetColorConsumerStateInput = ColorConsumer

const setColorConsumerStateReducer: CaseReducer<
  EditorStatesState,
  PayloadAction<SetColorConsumerStateInput>
> = (state, { payload: newColorConsumer }) => {
  state.colorConsumer = newColorConsumer;
};

export type SetBackgroundShapeStateInput = NonableShape

const setBackgroundShapeStateReducer: CaseReducer<
  EditorStatesState,
  PayloadAction<SetBackgroundShapeStateInput>
> = (state, { payload: newShape }) => {
  state.backgroundShape = newShape;
};

const toggleBackgroundShapeStateReducer: CaseReducer<
  EditorStatesState
> = (state) => {
  switch (state.backgroundShape) {
  case "rectangle":
    state.backgroundShape = "circle";
    break;
  case "circle":
    state.backgroundShape = "triangle";
    break;
  case "triangle":
    state.backgroundShape = "heart";
    break;
  case "heart":
    state.backgroundShape = "star";
    break;
  case "star":
    state.backgroundShape = "none";
    break;
  case "none":
    state.backgroundShape = "rectangle";
    break;
  default:
    break;
  }
};

export const {
  reducer,
  actions: {
    setFontStyleState,
    setPickedColorState,
    setTextOnEditState,
    setColorConsumerState,
    setBackgroundShapeState,
    toggleBackgroundShapeState
  }
} = createSlice({
  name: "editorStatesSlice",
  initialState,
  reducers: {
    setFontStyleState: setFontStyleStateReducer,
    setPickedColorState: setPickedColorStateReducer,
    setTextOnEditState: setTextOnEditStateReducer,
    setColorConsumerState: setColorConsumerStateReducer,
    setBackgroundShapeState: setBackgroundShapeStateReducer,
    toggleBackgroundShapeState: toggleBackgroundShapeStateReducer,
  }
});
