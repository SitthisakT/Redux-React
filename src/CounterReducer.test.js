function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

test("increment", () => {
  const state = 0;
  const expected = 1;

  const actual = counterReducer(state, { type: "INCREMENT" });

  expect(actual).toBe(expected);
});

test("decrement", () => {
  const state = 0;
  const expected = -1;

  const actual = counterReducer(state, { type: "DECREMENT" });

  expect(actual).toBe(expected);
});

test("reset", () => {
  const state = 0;
  const expected = 0;

  const actual = counterReducer(state, { type: "RESET" });

  expect(actual).toBe(expected);
});
