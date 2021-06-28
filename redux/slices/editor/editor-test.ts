import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EditorTestState {
    test: boolean,
}

const initialState: EditorTestState = {
  test: false
};

export type SetTestInput = boolean;

const setTestReducer: CaseReducer<
    EditorTestState,
    PayloadAction<SetTestInput>
> = (state, { payload: test }) => {
  state.test = test;
};

export const {
  reducer,
  actions: {
    setTest
  }
} = createSlice({
  name: "editorSlice",
  initialState,
  reducers: {
    setTest: setTestReducer
  }
});