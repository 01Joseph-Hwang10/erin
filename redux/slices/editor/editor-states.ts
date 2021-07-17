import { FontStyles } from "@components/editor/bottom-float/font-style-members/font-style.data";
import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Erin } from "erin";

type ColorConsumer = "textFontColor" | "textBackgroundColor"

type NullableColorConsumer =  ColorConsumer | null

export const initialFontSize = 40;

interface EditorStatesState {
    fontStyle: FontStyles | null,
    pickedColor: string | null,
    textOnEdit: boolean,
    colorConsumer: NullableColorConsumer,
    backgroundShape: Erin.Common.NonableTextStyle,
    textContent: string | null,
    textAlign: Erin.Common.TextAlign,
    fontSize: number,
    textAnimationType: Erin.Common.TextAnimationTypes,
    animationInfinite: boolean,
}

const initialState: EditorStatesState = {
  fontStyle: null,
  pickedColor: null,
  textOnEdit: false,
  colorConsumer: null,
  backgroundShape: "none",
  textContent: null,
  textAlign: "justify",
  fontSize: initialFontSize,
  textAnimationType: "none",
  animationInfinite: true,
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

export type SetColorConsumerStateInput = NullableColorConsumer

const setColorConsumerStateReducer: CaseReducer<
  EditorStatesState,
  PayloadAction<SetColorConsumerStateInput>
> = (state, { payload: newColorConsumer }) => {
  state.colorConsumer = newColorConsumer;
};

export type SetBackgroundShapeStateInput = Erin.Common.NonableTextStyle

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
    state.backgroundShape = "none";
    break;
  // case "circle":
  //   state.backgroundShape = "heart";
  //   break;
  // case "heart":
  //   state.backgroundShape = "star";
  //   break;
  // case "star":
  //   state.backgroundShape = "none";
  //   break;
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

export type SetTextAlignStateInput = Erin.Common.TextAlign

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

export type SetTextAnimationTypeStateInput = Erin.Common.TextAnimationTypes

const setTextAnimationTypeStateReducer: CaseReducer<
  EditorStatesState,
  PayloadAction<SetTextAnimationTypeStateInput>
> = (state, { payload: textAnimationType }) => {
  state.textAnimationType = textAnimationType;
};

const toggleTextAnimationStateReducer: CaseReducer<
  EditorStatesState
> = (state) => {
  switch (state.textAnimationType) {
  case "none":
    state.textAnimationType = "blink";
    break;
  case "blink":
    state.textAnimationType = "typing";
    break;
  case "typing":
    state.textAnimationType = "fade";
    break;
  case "fade":
    state.textAnimationType = "moving";
    break;
  case "moving":
    state.textAnimationType = "none";
    break;
  default:
    break;
  }
};

export type SetAnimationInfiniteInput = boolean

const setAnimationInfiniteReducer: CaseReducer<
  EditorStatesState,
  PayloadAction<SetAnimationInfiniteInput>
> = (state, { payload: animationInfinite }) => {
  state.animationInfinite = animationInfinite
}

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
    setFontSizeState,
    setTextAnimationTypeState,
    toggleTextAnimationState,
    setAnimationInfinite,
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
    setFontSizeState: setFontSizeStateReducer,
    setTextAnimationTypeState: setTextAnimationTypeStateReducer,
    toggleTextAnimationState: toggleTextAnimationStateReducer,
    setAnimationInfinite: setAnimationInfiniteReducer,
  }
});
