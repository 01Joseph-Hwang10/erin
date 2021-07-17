import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Erin } from "erin";

export interface EditorLayersState {
    layer: Erin.Editor.Layer[],
    currentLayer: number,
    config: Erin.Common.LetterConfig,
}

const initialState: EditorLayersState = {
  layer: [
    {
      id: 0,
      components: [],
      autoZIndex: 2,
    }
  ],
  currentLayer: 1, // Index of layer but +1
  config: {
    background: "YOU_NEED_TO_MAKE_DEFAULT_LETTER_PAPER",
    backgroundType: "pattern", // Or image, if neccessary
    music: null
  },
};

export type SetCurrentLayerInput = number;

const setCurrentLayerReducer: CaseReducer<
    EditorLayersState,
    PayloadAction<SetCurrentLayerInput>
> = (state, { payload: currentLayer }) => {
  state.currentLayer = currentLayer;
};


export const {
  reducer,
  actions: {
    setCurrentLayer
  }
} = createSlice({
  name: "editorSlice",
  initialState,
  reducers: {
    setCurrentLayer: setCurrentLayerReducer
  }
});