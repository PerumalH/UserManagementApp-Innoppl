import { Filter, RotateCcw } from "lucide-react";

const TodoFilterOption = ({
  todoStats,
  filterOptions,
  handleFilter,
  filter,
  handleClear,
}) => {
  return (
    <div className="todos-page__controls">
      <div className="todos-page__stats">
        <span className="todos-page__stat">
          {todoStats.total} total, {todoStats.completed} completed
        </span>
      </div>
      <div className="todos-page__filters">
        <Filter size={16} />
        {filterOptions.map((option) => (
          <button
            key={option.value}
            className={`todos-page__filter-btn ${
              filter === option.value ? "todos-page__filter-btn--active" : ""
            }`}
            onClick={() => handleFilter(option.value)}
          >
            {option.label} ({option.count})
          </button>
        ))}
        {todoStats.completed > 0 && (
          <button className="todos-page__clear-btn" onClick={handleClear}>
            <RotateCcw size={16} />
            Clear Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoFilterOption;
