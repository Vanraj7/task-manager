import React, { useState } from "react";
import API from "../services/api";

export default function TaskForm({ fetchTasks }) {
  const [task, setTask] = useState({ title: "", description: "", status: "todo" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/tasks", task);
      alert("✅ Task created!");
      setTask({ title: "", description: "", status: "todo" });
      fetchTasks();
    } catch (err) {
      alert("❌ Failed to create task");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} required />
      <input placeholder="Description" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} />
      <select value={task.status} onChange={(e) => setTask({ ...task, status: e.target.value })}>
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}
