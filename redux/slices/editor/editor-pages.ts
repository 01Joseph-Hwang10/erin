import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Erin } from "erin";

export interface EditorPagesState {
    pages: Erin.Editor.Page[],
    currentPage: number,
    config: Erin.Editor.LetterConfig,
}

const initialState: EditorPagesState = {
  pages: [
    {
      id: 0,
      components: [],
      animations: [],
      autoZIndex: 2
    }
  ],
  currentPage: 1, // Index of pages but +1
  config: {
    background: "YOU_NEED_TO_MAKE_DEFAULT_LETTER_PAPER",
    backgroundType: "pattern", // Or image, if neccessary
    music: null
  },
};

export type SetCurrentPageInput = number;

const setCurrentPageReducer: CaseReducer<
    EditorPagesState,
    PayloadAction<SetCurrentPageInput>
> = (state, { payload: currentPage }) => {
  state.currentPage = currentPage;
};


export const {
  reducer,
  actions: {
    setCurrentPage
  }
} = createSlice({
  name: "editorSlice",
  initialState,
  reducers: {
    setCurrentPage: setCurrentPageReducer
  }
});