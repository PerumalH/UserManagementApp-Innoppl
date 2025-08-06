import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filter: "all",
  loading: false,
  error: null,
};

const isTodopresent = localStorage.getItem("todos");
if (isTodopresent) {
  const parsedTodos = JSON.parse(isTodopresent);
  initialState.todos = parsedTodos;
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
        createdAt: new Date().toISOString(),
        userId: action.payload.userId,
      };
      state.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearCompletedTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  editTodo,
  deleteTodo,
  setFilter,
  clearCompletedTodos,
} = todoSlice.actions;

export const selectFilteredTodos = (state) => {
  const { todos, filter } = state.todos;
  const userId = state.auth.user?.id;

  const userTodos = todos.filter((todo) => todo.userId === userId);

  switch (filter) {
    case "completed":
      return userTodos.filter((todo) => todo.completed);
    case "pending":
      return userTodos.filter((todo) => !todo.completed);
    default:
      return userTodos;
  }
};

export const selectTodoStats = (state) => {
  const userId = state.auth.user?.id;
  const userTodos = state.todos.todos.filter((todo) => todo.userId === userId);

  return {
    total: userTodos.length,
    completed: userTodos.filter((todo) => todo.completed).length,
    pending: userTodos.filter((todo) => !todo.completed).length,
  };
};

export default todoSlice.reducer;
