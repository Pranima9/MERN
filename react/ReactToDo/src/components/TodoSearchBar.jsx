function TodoSearchBar({ searchQuery, onSearchChange, showAddForm, onToggleAddForm }) {
  return (
    <div className="top-bar">
      <input
        type="text"
        className="search-input"
        placeholder="🔍 Search tasks..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button className="btn-add-toggle" onClick={onToggleAddForm}>
        {showAddForm ? '✕ Close' : '➕ Add Task'}
      </button>
    </div>
  );
}

export default TodoSearchBar;
