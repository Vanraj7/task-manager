import React, { useState } from "react";
import API from "../services/api";

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("✅ Login successful!");
      onLogin();
    } catch (err) {
      alert("❌ Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
      <button type="submit">Login</button>
    </form>
  );
}
