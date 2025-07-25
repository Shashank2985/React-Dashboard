import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/user/:id" element={
        <ProtectedRoute>
          <UserProfile />
        </ProtectedRoute>
      }
      />
    </Routes>
  );
}

export default App;
