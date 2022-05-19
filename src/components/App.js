import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './LogIn';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <Login/>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard/>
          }
        />
      </Routes>
    </div>
  )
}
export default App;