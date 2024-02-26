import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import Login from "./components/Login";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchUser } from "./utils/fetchUser";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
