import { Route, Routes } from "react-router-dom";

// Page Components
import Home from "./pages/Home.js";
import Destiantion from "./pages/Destination.js";
import Crew from "./pages/Crew.js";
import Technology from "./pages/Technology";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destiantion />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
