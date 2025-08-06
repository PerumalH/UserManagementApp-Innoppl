import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  addTodo,
  toggleTodo,
  editTodo,
  deleteTodo,
  setFilter,
  clearCompletedTodos,
  selectFilteredTodos,
  selectTodoStats,
} from "../store/slices/todoSlice";
import { Plus } from "lucide-react";
import TodoFilterOption from "../components/TodoFilteroption";
import TodoFilterList from "../components/TodoFilterList";
import "../styles/todopage.scss";

const TodosPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { filter } = useSelector((state) => state.todos);
  const filteredTodos = useSelector(selectFilteredTodos);
  const todoStats = useSelector(selectTodoStats);

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  console.log(user, filter, "Checking store data");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Checking on submit data", data);
    if (data.text.trim()) {
      dispatch(
        addTodo({
          text: data.text.trim(),
          userId: user.id,
        })
      );
      reset();
    }
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const saveEdit = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, text: editText.trim() }));
      setEditingId(null);
      setEditText("");
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));

    console.log("after Filter", filter);
  };

  const handleClearCompleted = () => {
    dispatch(clearCompletedTodos());
  };

  const filterOptions = [
    { value: "all", label: "All Tasks", count: todoStats.total },
    { value: "pending", label: "Pending", count: todoStats.pending },
    { value: "completed", label: "Completed", count: todoStats.completed },
  ];

  return (
    <div className="todos-page">
      <div className="todos-page__container">
        <div className="todos-page__header">
          <h1 className="todos-page__title">Todo Management</h1>
          <p className="todos-page__subtitle">
            Stay organized and track your daily tasks
          </p>
        </div>

        <div className="todos-page__card">
          <form className="todos-page__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="todos-page__input-wrapper">
              <input
                type="text"
                className={`todos-page__input ${
                  errors.text ? "todos-page__input--error" : ""
                }`}
                placeholder="What needs to be done?"
                {...register("text", {
                  required: "Task text is required",
                  minLength: {
                    value: 1,
                    message: "Task must have at least 1 character",
                  },
                  maxLength: {
                    value: 200,
                    message: "Task must be less than 200 characters",
                  },
                })}
              />
              <button type="submit" className="todos-page__add-btn">
                <Plus size={20} />
                Add Task
              </button>
            </div>
            {errors.text && (
              <span className="todos-page__error">{errors.text.message}</span>
            )}
          </form>

          <TodoFilterOption
            todoStats={todoStats}
            filterOptions={filterOptions}
            filter={filter}
            handleFilter={handleFilterChange}
            handleClear={handleClearCompleted}
          />
          <TodoFilterList
            filter={filter}
            filteredTodos={filteredTodos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            editText={editText}
            editingId={editingId}
            setEditText={setEditText}
            saveEdit={saveEdit}
            startEdit={startEdit}
            cancelEdit={cancelEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
