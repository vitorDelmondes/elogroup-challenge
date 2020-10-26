import { createActions, createReducer } from "reduxsauce";

// Action types & creators
export const { Types, Creators } = createActions({
  changeUser: ["text"],
  toggleTodo: ["id"],
  removeTodo: ["id"],
});

// Handlers
const INITIAL_STATE = [];

const user = (state = INITIAL_STATE, action) => [
  ...state,
  { id: Math.random(), text: action.text, complete: false },
];

const toggle = (state = INITIAL_STATE, action) =>
  state.map((todo) =>
    todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
  );

const remove = (state = INITIAL_STATE, action) =>
  state.filter((todo) => todo.id !== action.id);

// Reducer
export default createReducer(INITIAL_STATE, {
  [Types.CHANGE_USER]: user,
  [Types.TOGGLE_TODO]: toggle,
  [Types.REMOVE_TODO]: remove,
});
