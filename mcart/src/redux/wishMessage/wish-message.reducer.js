import { SAY_GOOD_MORNING, SAY_GOOD_NIGHT } from "./wish-message.actionTypes";
import WishMessage from "../../wish/wishMessage";

export const messageKey = "messageCard";
let initialState = {
  message: "Hello- Working",
};
let messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAY_GOOD_MORNING:
      return {
        message: "Good Morning",
      };
    case SAY_GOOD_NIGHT:
      return {
        message: "Good Night",
      };
    default:
      return state;
  }
};
export { messageReducer };
