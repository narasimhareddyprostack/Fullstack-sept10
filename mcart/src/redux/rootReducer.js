//it contains all reducer - messageReducer
import { combineReducers } from "redux";
import { messageReducer } from "./wishMessage/wish-message.reducer";

import { messageKey } from "./wishMessage/wish-message.reducer";
let rootReducer = combineReducers({ [messageKey]: messageReducer });
export { rootReducer };
