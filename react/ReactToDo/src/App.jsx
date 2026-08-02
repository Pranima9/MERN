// Import the useState hook from React for managing component state
import { useState } from 'react';
import './App.css';
import TodoSearchBar from './components/TodoSearchBar.jsx';
import AddTodoForm from './components/AddTodoForm.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  // State hook: stores array of todo objects; each has id, title, description, and importance level
  const [todos, setTodos] = useState([
    // Initial sample todos loaded when component mounts
    { id: 1, title: 'Buy groceries', description: 'Milk, eggs, bread, and fruits', importance: 'Medium' },
    { id: 2, title: 'Finish project report', description: 'Complete draft and send to team', importance: 'High' },
    { id: 3, title: 'Go for a 30-minute run', description: 'Evening jog in the park', importance: 'Low' }
  ]);

  // State hook: tracks the search query text entered by the user
  const [searchQuery, setSearchQuery] = useState('');
  // State hook: toggles visibility of the "Add Task" form
  const [showAddForm, setShowAddForm] = useState(false);
  // State hook: stores the title input for a new todo task
  const [newTitle, setNewTitle] = useState('');
  // State hook: stores the description input for a new todo task
  const [newDescription, setNewDescription] = useState('');
  // State hook: stores the importance level selected for a new todo (defaults to 'Medium')
  const [newImportance, setNewImportance] = useState('Medium');

  // Event handler: executes when user submits the "Add Task" form
  const handleAddTodo = (e) => {
    // Prevent the form from doing a page reload (default form behavior)
    e.preventDefault();
    // If title is empty or only whitespace, exit early without adding the task
    if (!newTitle.trim()) return;

    // Create a new task object with unique id (based on current timestamp)
    const newTask = {
      id: Date.now(), // Generates unique ID using current time in milliseconds
      title: newTitle.trim(), // Remove leading/trailing spaces from title
      description: newDescription.trim(), // Remove leading/trailing spaces from description
      importance: newImportance // Use selected importance level
    };

    // Add the new task to the beginning of the todos array and update state
    setTodos([newTask, ...todos]);
    // Clear the form input fields after successfully adding the task
    setNewTitle('');
    setNewDescription('');
    setNewImportance('Medium'); // Reset to default importance level
    // Hide the form after task is added
    setShowAddForm(false);
  };

  // Event handler: removes a todo from the list by its id
  const handleDelete = (id) => {
    // Filter out the todo with matching id and update the todos list
    setTodos(todos.filter(t => t.id !== id));
  };

  // Computed value: filters todos based on search query (case-insensitive)
  // Returns todos matching the search in title, description, or importance level
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    todo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    todo.importance.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // JSX return: renders the entire todo application UI
  return (
    <div className="container">
      <h1>My Todo List</h1>

      <TodoSearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        showAddForm={showAddForm}
        onToggleAddForm={() => setShowAddForm(!showAddForm)}
      />

      <AddTodoForm
        show={showAddForm}
        newTitle={newTitle}
        newDescription={newDescription}
        newImportance={newImportance}
        onTitleChange={setNewTitle}
        onDescriptionChange={setNewDescription}
        onImportanceChange={setNewImportance}
        onCancel={() => setShowAddForm(false)}
        onSubmit={handleAddTodo}
      />

      <TodoList
        todos={filteredTodos}
        searchQuery={searchQuery}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
