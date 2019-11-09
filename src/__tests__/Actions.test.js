import { setCardsVisible } from "../actions";
import { SET_CARDS_VISIBLE } from "../actions/types";

describe("setCardsVisible", () => {
  it("correctly creates the action for cards visible", () => {
    const action = setCardsVisible(false);
    expect(action.type).toEqual(SET_CARDS_VISIBLE);
  });

  it("has the correct payload", () => {
    const action = setCardsVisible(true);
    expect(action.payload).toEqual(true);
  });
});
