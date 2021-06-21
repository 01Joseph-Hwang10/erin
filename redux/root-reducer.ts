import { combineReducers } from "redux";
import { reducer as screenReducer } from "./slices/screen";

const rootReducer = combineReducers({
    screen: screenReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer