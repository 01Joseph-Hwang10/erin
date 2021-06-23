import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Erin } from "erin";

export interface EditorState {
    /* publish: The value which will be used at onLayout functions 
    at each drag-and-dropped items in which if this variable is true, 
    it will measure the position and other properites for render it for viewers. */
    publish: boolean,
    pages: Erin.Editor.Page[],
    publishPages: [], // Components for publish will be stored at here
    config: Erin.Editor.LetterConfig,
    /* test: The value which will tell if it is testing the letter.
    This can be applied as component alternater */
    test: boolean,
    currentPage: number,
    focusedComponent: number, // if no focused component, -1,
    bottomTabCurrent: Erin.Editor.BottomTabMenuType,
    topFloatCurrent: Erin.Editor.TopFloatMenuType,
    sideFloatCurrent: Erin.Editor.SideFloatMenuType
}

const initialState: EditorState = {
  publish: false,
  pages: [],
  publishPages: [],
  config: {
    background: "YOU_NEED_TO_MAKE_DEFAULT_LETTER_PAPER",
    backgroundType: "pattern", // Or image, if neccessary
    music: null
  },
  test: false,
  currentPage: 1,
  focusedComponent: -1,
  bottomTabCurrent: "default",
  topFloatCurrent: "default",
  sideFloatCurrent: "none"
};

export type SetPublishInput = boolean;

const setPublishReducer: CaseReducer<
    EditorState,
    PayloadAction<SetPublishInput>
> = (state, { payload: publish }) => {
  state.publish = publish;
};



export const {
  reducer,
  actions: {
    setPublish
  }
} = createSlice({
  name: "editorSlice",
  initialState,
  reducers: {
    setPublish: setPublishReducer
  }
});