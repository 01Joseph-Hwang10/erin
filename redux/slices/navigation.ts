import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Erin } from "erin";
import { voidFunction } from "../../src/constants";


interface NavigationState {
    currentPage: Erin.AppPageNames | string,
    popAtEditor: () => void
}

const initialState: NavigationState = {
  currentPage: "postbox",
  popAtEditor: voidFunction
};

export type SetCurrentPageInput = string

const setCurrentPageReducer: CaseReducer<
    NavigationState,
    PayloadAction<SetCurrentPageInput>
> = (state, { payload: currentPage }) => {
  state.currentPage = currentPage;
};

export type SetPopAtEditorInput = () => void;

const setPopAtEditorReducer: CaseReducer<
  NavigationState,
  PayloadAction<SetPopAtEditorInput>
> = (state, { payload: popAtEditor }) => {
  state.popAtEditor = popAtEditor;
};

export const {
  reducer,
  actions: {
    setCurrentPage,
    setPopAtEditor
  }
} = createSlice({
  name: "navigationSlice",
  initialState,
  reducers: {
    setCurrentPage: setCurrentPageReducer,
    setPopAtEditor: setPopAtEditorReducer
  }
});