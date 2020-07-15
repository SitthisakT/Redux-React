// action types
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

// action creators
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: filter
});

// reducer
export const initialState = "SHOW_ALL";
export function visibilityFilterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
}
