import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

type Page = "home" | "login" | "register" | "dashboard";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex items-center justify-center">
      {page === "home" && <Home goToLogin={() => setPage("login")} />}
      {page === "login" && (
        <Login
          goToRegister={() => setPage("register")}
          goToDashboard={() => setPage("dashboard")}
        />
      )}
      {page === "dashboard" && <Dashboard goToHome={() => setPage("home")} />}
    </div>
  );
}
