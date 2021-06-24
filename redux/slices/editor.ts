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
    bottomFloatCurrent: Erin.Editor.BottomFloatMenuType,
    settings: Erin.Editor.Settings
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
  currentPage: 1, // Index of pages but +1
  focusedComponent: -1,
  bottomTabCurrent: "default",
  topFloatCurrent: "default",
  bottomFloatCurrent: "none",
  settings: {
    iconSize: 1,
    iconGap: 1
  }
};

export type SetPublishInput = boolean;

const setPublishReducer: CaseReducer<
    EditorState,
    PayloadAction<SetPublishInput>
> = (state, { payload: publish }) => {
  state.publish = publish;
};

export type ConfigureIconLayoutInput = Erin.Editor.Settings;

const configureIconLayoutReducer: CaseReducer<
  EditorState,
  PayloadAction<ConfigureIconLayoutInput>
> = (state, { payload: settings }) => {
  state.settings = settings;
};


export const {
  reducer,
  actions: {
    setPublish,
    configureIconLayout
  }
} = createSlice({
  name: "editorSlice",
  initialState,
  reducers: {
    setPublish: setPublishReducer,
    configureIconLayout: configureIconLayoutReducer
  }
});