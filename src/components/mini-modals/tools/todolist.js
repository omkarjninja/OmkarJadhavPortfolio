import { useState } from "react";
import "./tools.css";

function ToDo() {
  // State for tasks
  const [tasks, setTasks] = useState(["Coding"]);
  const [inputValue, setInputValue] = useState("");

  // Add a new task
  const addTask = () => {
    if (inputValue.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    setTasks([...tasks, inputValue.trim()]);
    setInputValue("");
  };

  // Delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Toggle task completion
  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-12 px-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Welcome!</h1>
        <p className="text-gray-300">Let's create a new ToDo List 🎉</p>
      </header>

      {/* Input */}
      <div className="flex w-full max-w-md mb-6 gap-2">
        <input
          type="text"
          placeholder="Enter new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 p-3 rounded-md outline-none border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-500"
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button
          onClick={addTask}
          className="px-4 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition"
        >
          Add
        </button>
      </div>

      {/* Tasks List */}
      <div className="w-full max-w-md">
        {tasks.length === 0 && (
          <p className="text-gray-400 text-center">No tasks yet 😎</p>
        )}

        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-800 text-white px-4 py-3 mb-2 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed || false}
                onChange={() => toggleTask(index)}
                className="h-5 w-5 accent-indigo-500"
              />
              <span
                className={`${
                  task.completed ? "line-through text-gray-400" : ""
                } text-lg`}
              >
                {task}
              </span>
            </div>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-400 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDo;
