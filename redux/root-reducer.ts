import { combineReducers } from "redux";
import { reducer as screenReducer } from "./slices/screen";
import { reducer as editorReducer } from "./slices/editor";

const rootReducer = combineReducers({
  screen: screenReducer,
  editor: editorReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;