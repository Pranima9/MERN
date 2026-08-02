function TodoCard({ todo, onDelete }) {
  const importanceClass = todo.importance.toLowerCase();

  return (
    <div className={`todo-card importance-${importanceClass}`}>
      <div className="card-header-row">
        <span className={`importance-badge badge-${importanceClass}`}>
          {todo.importance === 'High' && '🔴 High'}
          {todo.importance === 'Medium' && '🟡 Medium'}
          {todo.importance === 'Low' && '🟢 Low'}
        </span>
      </div>
      <div className="card-content">
        <h3>{todo.title}</h3>
        {todo.description && <p>{todo.description}</p>}
      </div>
      <button className="btn-delete" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoCard;
