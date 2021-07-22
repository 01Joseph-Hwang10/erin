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
    stickerId: string | null,
    stickerAnimationType: Erin.Common.StickerAnimationTypes
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
  stickerId: null,
  stickerAnimationType: "none"
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
    state.backgroundShape = "shadow";
    break;
  case "shadow":
    state.backgroundShape = "neon";
    break;
  case "neon":
    state.backgroundShape = "emphasize";
    break;
  case "emphasize":
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
    state.textAnimationType = "bounce";
    break;
  case "bounce":
    state.textAnimationType = "none";
    break;
  default:
    break;
  }
};

export type SetStickerAnimationTypeStateInput = Erin.Common.StickerAnimationTypes

const setStickerAnimationTypeStateReducer: CaseReducer<
  EditorStatesState,
  PayloadAction<SetStickerAnimationTypeStateInput>
> = (state, { payload: textAnimationType }) => {
  state.textAnimationType = textAnimationType;
};

const toggleStickerAnimationStateReducer: CaseReducer<
  EditorStatesState
> = (state) => {
  switch (state.textAnimationType) {
  case "none":
    state.textAnimationType = "blink";
    break;
  case "blink":
    state.textAnimationType = "fade";
    break;
  case "fade":
    state.textAnimationType = "none";
    break;
  default:
    break;
  }
};

export type SetAnimationInfiniteStateInput = boolean

const setAnimationInfiniteStateReducer: CaseReducer<
  EditorStatesState,
  PayloadAction<SetAnimationInfiniteStateInput>
> = (state, { payload: animationInfinite }) => {
  state.animationInfinite = animationInfinite;
};

export type SetStickerIdStateInput = string | null

const setStickerIdStateReducer: CaseReducer<
  EditorStatesState,
  PayloadAction<SetStickerIdStateInput>
> = (state, { payload: stickerId }) => {
  state.stickerId = stickerId;
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
    setFontSizeState,
    setTextAnimationTypeState,
    toggleTextAnimationState,
    setAnimationInfiniteState,
    setStickerIdState,
    setStickerAnimationTypeState,
    toggleStickerAnimationState,
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
    setAnimationInfiniteState: setAnimationInfiniteStateReducer,
    setStickerIdState: setStickerIdStateReducer,
    setStickerAnimationTypeState: setStickerAnimationTypeStateReducer,
    toggleStickerAnimationState: toggleStickerAnimationStateReducer,
  }
});
