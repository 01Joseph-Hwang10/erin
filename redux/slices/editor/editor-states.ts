import { FontStyles } from "@components/editor/bottom-float/font-style-members/font-style.data";
import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditorStatesState {
    fontStyle: FontStyles | null,
    fontColor: string | null,
    textOnEdit: boolean
}

const initialState: EditorStatesState = {
  fontStyle: null,
  fontColor: null,
  textOnEdit: false
};

export type SetFontStyleStateInput = FontStyles | null

const setFontStyleStateReducer: CaseReducer<
    EditorStatesState,
    PayloadAction<SetFontStyleStateInput>
> = (state, { payload: fontStyle }) => {
  state.fontStyle = fontStyle;
};

export type SetFontColorStateInput = string | null

const setFontColorStateReducer: CaseReducer<
    EditorStatesState,
    PayloadAction<SetFontColorStateInput>
> = (state, { payload: fontColor }) => {
  state.fontColor = fontColor;
};

export type SetTextOnEditStateInput = boolean

const setTextOnEditStateReducer: CaseReducer<
    EditorStatesState,
    PayloadAction<SetTextOnEditStateInput>
> = (state, { payload: textOnEdit }) => {
  state.textOnEdit = textOnEdit;
};

export const {
  reducer,
  actions: {
    setFontStyleState,
    setFontColorState,
    setTextOnEditState
  }
} = createSlice({
  name: "editorStatesSlice",
  initialState,
  reducers: {
    setFontStyleState: setFontStyleStateReducer,
    setFontColorState: setFontColorStateReducer,
    setTextOnEditState: setTextOnEditStateReducer
  }
});