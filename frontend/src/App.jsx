import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Primetrade Task Manager</h1>

      {!loggedIn ? (
        <>
          <h2>Register</h2>
          <Register />
          <hr />
          <h2>Login</h2>
          <Login onLogin={() => setLoggedIn(true)} />
        </>
      ) : (
        <>
          <button onClick={handleLogout} style={{ marginBottom: "10px" }}>
            Logout
          </button>
          <Dashboard />
        </>
      )}
    </div>
  );
}

export default App;
