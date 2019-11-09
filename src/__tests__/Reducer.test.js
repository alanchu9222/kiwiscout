import cardsReducer from "../reducers";
import { SET_CARDS_VISIBLE } from "../actions/types";

it("handles actions of type SET_CARDS_VISIBLE = true", () => {
  const action = {
    type: SET_CARDS_VISIBLE,
    payload: true
  };

  const newState = cardsReducer(undefined, action);

  expect(newState.cards.cardsVisible).toEqual(true);
});

it("handles actions of type SET_CARDS_VISIBLE = false", () => {
  const action = {
    type: SET_CARDS_VISIBLE,
    payload: false
  };

  const newState = cardsReducer(undefined, action);

  expect(newState.cards.cardsVisible).toEqual(false);
});
