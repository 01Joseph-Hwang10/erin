import { NonableShape } from "@components/common/shapes/shape.types";
import { FontStyles } from "@components/editor/bottom-float/font-style-members/font-style.data";
import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

type ColorConsumer = "textFontColor" | "textBackgroundColor" | null

export type TextAlign = "center" | "left" | "right" | "justify"

export const initialFontSize = 40;

interface EditorStatesState {
    fontStyle: FontStyles | null,
    pickedColor: string | null,
    textOnEdit: boolean,
    colorConsumer: ColorConsumer,
    backgroundShape: NonableShape,
    textContent: string | null,
    textAlign: TextAlign,
    fontSize: number
}

const initialState: EditorStatesState = {
  fontStyle: null,
  pickedColor: null,
  textOnEdit: false,
  colorConsumer: null,
  backgroundShape: "none",
  textContent: null,
  textAlign: "justify",
  fontSize: initialFontSize
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
    state.backgroundShape = "roundedRectangle";
    break;
  case "roundedRectangle":
    state.backgroundShape = "circle";
    break;
  case "circle":
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

export type SetTextContentStateInput = string | null

const setTextContentStateReducer: CaseReducer<
  EditorStatesState,
  PayloadAction<SetTextContentStateInput>
> = (state, { payload }) => {
  state.textContent = payload;
};

export type SetTextAlignStateInput = TextAlign

const setTextAlignStateReducer: CaseReducer<
  EditorStatesState,
  PayloadAction<SetTextAlignStateInput>
> = (state, { payload: newTextAlign }) => {
  state.textAlign = newTextAlign;
};

const toggleTextAlignStateReducer: CaseReducer<
  EditorStatesState
> = (state) => {
  switch (state.textAlign) {
  case "justify":
    state.textAlign = "center";
    break;
  case "center":
    state.textAlign = "left";
    break;
  case "left":
    state.textAlign = "right";
    break;
  case "right":
    state.textAlign = "justify";
    break;
  default:
    break;
  }
};

export type SetFontSizeStateInput = number

const setFontSizeStateReducer: CaseReducer<
  EditorStatesState,
  PayloadAction<SetFontSizeStateInput>
> = (state, { payload: fontSize }) => {
  state.fontSize = fontSize;
};

export const {
  reducer,
  actions: {
    setFontStyleState,
    setPickedColorState,
    setTextOnEditState,
    setColorConsumerState,
    setBackgroundShapeState,
    toggleBackgroundShapeState,
    setTextContentState,
    setTextAlignState,
    toggleTextAlignState,
    setFontSizeState
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
    setTextContentState: setTextContentStateReducer,
    setTextAlignState: setTextAlignStateReducer,
    toggleTextAlignState: toggleTextAlignStateReducer,
    setFontSizeState: setFontSizeStateReducer
  }
});
