import React, { useEffect, useState } from "react";
import API from "../services/api";
import TaskForm from "./TaskForm";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      alert("❌ Failed to fetch tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <TaskForm fetchTasks={fetchTasks} />
      <h3>Your Tasks</h3>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <b>{t.title}</b> - {t.status} <br />
            <small>{t.description}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
