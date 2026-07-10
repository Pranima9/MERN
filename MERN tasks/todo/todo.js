// Cache DOM elements for easy access throughout the script
const container = document.querySelector(".container");
const heading = document.querySelector(".heading");
const addBtn = document.querySelector(".add");
const cards = document.querySelector(".cards");
const searchBar = document.querySelector(".searchbar");
const addForm = document.querySelector(".addForm");
const addFormBtn = document.querySelector(".addFormBtn");
const titleInput = addForm.querySelector('input[name="title"]');
const taskInput = addForm.querySelector('input[name="task"]');
const deadlineInput = addForm.querySelector('input[name="deadline"]');
const searchInput = document.querySelector(".searchbar input");

// Key used to store and retrieve tasks from localStorage
const STORAGE_KEY = "todoTasks";

// Load tasks from localStorage or use default sample tasks if none are saved yet
let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
  {
    title: "Draft an email",
    task: "Write a follow-up email to the client.",
    deadline: "2026-06-02",
  },
  {
    title: "Buy Groceries",
    task: "Pick up milk, eggs, and bread.",
    deadline: "2026-06-03",
  },
  {
    title: "Take Dog on Walk",
    task: "Walk the dog before dinner.",
    deadline: "2026-06-04",
  },
];

// Escape HTML characters to prevent rendering problems or security issues
function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Save the current `tasks` array into localStorage as JSON
function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Show the add-task form and hide the main task list UI
function showForm() {
  addForm.style.display = "flex";
  heading.style.display = "none";
  searchBar.style.display = "none";
  cards.style.display = "none";
  container.style.backgroundColor = "gray";
}

// Hide the add-task form and restore the main task list UI
function hideForm() {
  addForm.style.display = "none";
  heading.style.display = "flex";
  searchBar.style.display = "flex";
  cards.style.display = "flex";
  container.style.backgroundColor = "";
}

// Clear the form fields after adding a task
function resetForm() {
  titleInput.value = "";
  taskInput.value = "";
  deadlineInput.value = "";
}

// Render tasks filtered by the search query if provided
function renderTasks(filter = "") {
  const query = filter.toLowerCase().trim();

  // Filter tasks by title, description, or deadline using the search query
  const filteredTasks = tasks.filter((task) => {
    const content = `${task.title} ${task.task} ${task.deadline}`.toLowerCase();
    return content.includes(query);
  });

  // Clear existing rendered cards before rendering updated list
  cards.innerHTML = "";

  if (!filteredTasks.length) {
    cards.innerHTML = '<div class="empty-state">No tasks found.</div>';
    return;
  }

  // Create and append a card element for each matching task
  filteredTasks.forEach((task) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${escapeHtml(task.title)}</h3>
      <p>${escapeHtml(task.task)}</p>
      <span>Deadline: ${escapeHtml(task.deadline)}</span>
      <button class="delete-btn">Delete</button>
    `;

    // Add delete behavior for the task card
    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((item) => item !== task); // remove the clicked task
      saveTasks();
      renderTasks(searchInput.value); // re-render the filtered list
    });

    cards.appendChild(card);
  });
}

// When the Add button is clicked, display the form
addBtn.addEventListener("click", showForm);

// Handle form submission for adding a new task
addFormBtn.addEventListener("click", function (event) {
  event.preventDefault(); // prevent page refresh from the button click

  const title = titleInput.value.trim();
  const task = taskInput.value.trim();
  const deadline = deadlineInput.value.trim();

  if (!title || !task || !deadline) {
    alert("Please fill in all fields.");
    return;
  }

  // Add new task to the beginning of the list
  tasks.unshift({ title, task, deadline });
  saveTasks();
  renderTasks(searchInput.value);
  resetForm();
  hideForm();
});

// Re-render tasks as the user types into the search input
searchInput.addEventListener("input", (event) => {
  renderTasks(event.target.value);
});

// Initial render when the page loads
renderTasks();


