import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EditorPublishState {
    /* publish: The value which will be used at onLayout functions 
    at each drag-and-dropped items in which if this variable is true, 
    it will measure the position and other properites for render it for viewers. */
    publish: boolean,
    publishPages: [], // Components for publish will be stored at here
}

const initialState: EditorPublishState = {
  publish: false,
  publishPages: [],
};

export type SetPublishInput = boolean;

const setPublishReducer: CaseReducer<
    EditorPublishState,
    PayloadAction<SetPublishInput>
> = (state, { payload: publish }) => {
  state.publish = publish;
};

export const {
  reducer,
  actions: {
    setPublish,
  }
} = createSlice({
  name: "editorSlice",
  initialState,
  reducers: {
    setPublish: setPublishReducer,
  }
});