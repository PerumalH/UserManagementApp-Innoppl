import { Check, CheckSquare, Edit2, Square, Trash2, X } from "lucide-react";

const TodoFilterList = ({
  filteredTodos,
  filter,
  handleToggle,
  handleDelete,
  editingId,
  editText,
  setEditText,
  cancelEdit,
  saveEdit,
  startEdit,
}) => {
  console.log(filteredTodos, filter);
  return (
    <div className="todos-page__list">
      {filteredTodos.length === 0 ? (
        <div className="todos-page__empty">
          <CheckSquare size={48} />
          <h3>No tasks found</h3>
          <p>
            {filter === "all"
              ? "Add your first task to get started!"
              : `No ${filter} tasks at the moment.`}
          </p>
        </div>
      ) : (
        filteredTodos.map((todo) => (
          <div
            key={todo.id}
            className={`todos-page__item ${
              todo.completed ? "todos-page__item--completed" : ""
            }`}
          >
            <button
              className="todos-page__toggle"
              onClick={() => handleToggle(todo.id)}
            >
              {todo.completed ? (
                <CheckSquare size={20} />
              ) : (
                <Square size={20} />
              )}
            </button>

            {editingId === todo.id ? (
              <div className="todos-page__edit-form">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="todos-page__edit-input"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") saveEdit(todo.id);
                    if (e.key === "Escape") cancelEdit();
                  }}
                  autoFocus
                />
                <div className="todos-page__edit-actions">
                  <button
                    className="todos-page__edit-save"
                    onClick={() => saveEdit(todo.id)}
                  >
                    <Check size={16} />
                  </button>
                  <button
                    className="todos-page__edit-cancel"
                    onClick={cancelEdit}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <span className="todos-page__text">{todo.text}</span>
                <div className="todos-page__actions">
                  <button
                    className="todos-page__action-btn todos-page__action-btn--edit"
                    onClick={() => startEdit(todo)}
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    className="todos-page__action-btn todos-page__action-btn--delete"
                    onClick={() => handleDelete(todo.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TodoFilterList;
