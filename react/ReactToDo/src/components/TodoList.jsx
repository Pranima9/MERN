import TodoCard from './TodoCard.jsx';

function TodoList({ todos, searchQuery, onDelete }) {
  if (todos.length === 0) {
    return <p className="no-tasks">No tasks found matching "{searchQuery}"</p>;
  }

  return (
    <div className="card-grid">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TodoList;
