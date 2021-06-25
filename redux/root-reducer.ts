import { combineReducers } from "redux";
import { reducer as screenReducer } from "./slices/screen";
import { reducer as editorReducer } from "./slices/editor";
import { reducer as navigationReducer } from "./slices/navigation";
import { reducer as appStateReducer } from "./slices/app-state";

const rootReducer = combineReducers({
  screen: screenReducer,
  editor: editorReducer,
  navigation: navigationReducer,
  appState: appStateReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;