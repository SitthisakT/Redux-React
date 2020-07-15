import { todosReducer, addTodo, toggleTodo } from "./index";

test("should set initial state to empty array", () => {
  const state = undefined;
  const expected = [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Vue", completed: false }
  ];

  const actual = todosReducer(state, {});

  expect(actual).toEqual(expected);
});

test("should add todo", () => {
  const state = [];
  const expected = [{ id: 2, text: "Learn Vue", completed: false }];

  const actual = todosReducer(state, addTodo("Learn Vue"));

  expect(actual).toEqual(expected);
});

it("should toggle todo", () => {
  const state = [{ id: 0, text: "Learn Vue", completed: false }];

  let actual = todosReducer(state, toggleTodo(0));
  expect(actual).toEqual([{ id: 0, text: "Learn Vue", completed: true }]);

  actual = todosReducer(actual, toggleTodo(0));
  expect(actual).toEqual([{ id: 0, text: "Learn Vue", completed: false }]);
});
