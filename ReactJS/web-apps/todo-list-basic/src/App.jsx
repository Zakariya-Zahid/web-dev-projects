import React, { useState } from "react";

export default function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add task
  const addTask = () => {
    if (!taskInput.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completionStatus: false,
    };

    setTasks([...tasks, newTask]); // Proper React way
    setTaskInput("");
  };

  // Toggle completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completionStatus: !task.completionStatus }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const totalTaskCount = tasks.length;
  const completedTaskCount = tasks.filter((t) => t.completionStatus).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          ✅ My Todo List
        </h1>

        {/* Input Bar */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            onClick={addTask}
            className="bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-600 transition font-medium shadow-sm"
          >
            Add
          </button>
        </div>

        {/* Todo Items */}
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completionStatus}
                  onChange={() => toggleComplete(task.id)}
                  className="h-5 w-5 text-blue-500"
                />
                <span
                  className={`${
                    task.completionStatus
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700 font-bold"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-6 flex justify-between text-sm text-gray-500">
          <span>{totalTaskCount} tasks total</span>
          <span>{completedTaskCount} completed</span>
        </div>
      </div>
    </div>
  );
}
