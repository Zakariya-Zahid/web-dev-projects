import React, { useState } from "react";

const App = () => {
  const [TextInput, setTextInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [task, setTask] = useState([]);
  const addTask = () => {
    if (!TextInput.trim()) return;
    if (editId) {
      setTask(
        task.map((t) => (t.id === editId ? { ...t, text: TextInput } : t))
      );

      setEditId(null);
    } else {
      const taskObject = {
        id: Date.now(),
        text: TextInput,
        completion: false,
      };

      setTask([...task, taskObject]);
      setTextInput("");
    }
  };

  const toggleComplete = (id) => {
    setTask(
      task.map((task) =>
        task.id === id ? { ...task, completion: !task.completion } : task
      )
    );
  };

  const editField = (id) => {
    const selectedTask = task.find((t) => t.id === id);
    setTextInput(selectedTask.text);
    setEditId(id);
  };

  const deleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id));
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6 space-y-4">
        {/* Header */}
        <h1 className="text-xl font-semibold text-center text-gray-800">
          To‑Do App
        </h1>

        {/* Input field + Add button */}
        <div className="flex gap-2">
          <input
            type="text"
            value={TextInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Enter a task..."
            className="flex-1 rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
            className="rounded-xl bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
          >
            {editId ? "Save" : "Add"}
          </button>
        </div>

        {/* Task list */}
        <ul className="space-y-2">
          {task.map((t) => (
            <li
              key={t.id}
              className="flex items-center justify-between rounded-lg border p-3 hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                {/* Toggle checkbox */}
                <input
                  type="checkbox"
                  checked={t.completion}
                  onChange={() => toggleComplete(t.id)}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600"
                />
                <span
                  className={`text-sm ${
                    t.completion
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  } `}
                >
                  {t.text}
                </span>
              </div>

              {/* Edit + Delete buttons */}
              <div className="flex gap-1">
                <button
                  onClick={() => editField(t.id)}
                  className="rounded-lg border px-2 py-1 text-xs hover:bg-gray-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(t.id)}
                  className="rounded-lg border px-2 py-1 text-xs hover:bg-gray-100"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
