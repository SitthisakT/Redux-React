// action types
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// action creators
export const addTodo = text => ({
  type: ADD_TODO,
  payload: text
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id
});

// reducer
let id = 0;
const initialState = [
  { id: id++, text: "Learn React", completed: true },
  { id: id++, text: "Learn Vue", completed: false }
];
export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: id++, text: action.payload, completed: false }];

    case TOGGLE_TODO:
      return state.map(targetTodo => {
        if (targetTodo.id !== action.payload) return targetTodo;

        return {
          ...targetTodo,
          completed: !targetTodo.completed
        };
      });
    default:
      return state;
  }
}
