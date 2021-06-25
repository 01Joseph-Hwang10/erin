import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    loading: boolean
}

const initialState: AppState = {
  loading: false
};

export type SetLoadingInput = boolean;

const setLoadingReducer: CaseReducer<
    AppState,
    PayloadAction<SetLoadingInput>
> = (state, {payload: loading}) => {
  state.loading = loading;
};

export const {
  reducer,
  actions: {
    setLoading
  }
} = createSlice({
  name: "appStateSlice",
  initialState,
  reducers: {
    setLoading: setLoadingReducer
  }
});