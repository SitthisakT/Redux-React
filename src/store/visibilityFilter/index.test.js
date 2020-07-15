import { visibilityFilterReducer, setVisibilityFilter } from "./index";

test("should set visibilityFilter", () => {
  const state = undefined;

  // should set default state to SHOW_ALL
  let actual = visibilityFilterReducer(state, {});
  expect(actual).toBe("SHOW_ALL");

  actual = visibilityFilterReducer(
    "SHOW_ALL",
    setVisibilityFilter("SHOW_ACTIVE")
  );
  expect(actual).toBe("SHOW_ACTIVE");

  actual = visibilityFilterReducer(
    "SHOW_ACTIVE",
    setVisibilityFilter("SHOW_COMPLETED")
  );
  expect(actual).toBe("SHOW_COMPLETED");
});
