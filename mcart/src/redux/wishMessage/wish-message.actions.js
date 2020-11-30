import { SAY_GOOD_MORNING } from "./wish-message.actionTypes";
let sayGoodMornig = () => {
  return {
    type: "SAY_GOOD_MORNING",
    payload: "Good Morning Messag",
  };
};
let sayGoodNight = () => {
  return {
    type: "SAY_GOOD_NIGHT",
    payload: "Good Night Messag",
  };
};

export { sayGoodMornig, sayGoodNight };
