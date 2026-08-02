function AddTodoForm({
  show,
  newTitle,
  newDescription,
  newImportance,
  onTitleChange,
  onDescriptionChange,
  onImportanceChange,
  onCancel,
  onSubmit
}) {
  if (!show) return null;

  return (
    <form className="add-form-card" onSubmit={onSubmit}>
      <h3>Add New Task Card</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Task Title *"
        value={newTitle}
        onChange={(e) => onTitleChange(e.target.value)}
        required
        autoFocus
      />
      <textarea
        className="form-control"
        rows="3"
        placeholder="Description or notes (optional)..."
        value={newDescription}
        onChange={(e) => onDescriptionChange(e.target.value)}
      ></textarea>
      <div className="form-group">
        <label className="form-label">Importance Level:</label>
        <select
          className="form-control"
          value={newImportance}
          onChange={(e) => onImportanceChange(e.target.value)}
        >
          <option value="High">🔴 High Importance (Level 3)</option>
          <option value="Medium">🟡 Medium Importance (Level 2)</option>
          <option value="Low">🟢 Low Importance (Level 1)</option>
        </select>
      </div>
      <div className="form-buttons">
        <button type="button" className="btn-cancel" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn-submit">
          Add Card
        </button>
      </div>
    </form>
  );
}

export default AddTodoForm;
