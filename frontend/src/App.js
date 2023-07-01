import { Link, Route, Routes } from "react-router-dom";

// Page Components
import Home from "./pages/Home.js";
import Destiantion from "./pages/Destination.js";
import Crew from "./pages/Crew.js";
import Technology from "./pages/Technology";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/" className="list">
            Home
          </Link>
          <Link to="/destination" className="list">
            Destination
          </Link>
          <Link to="/crew" className="list">
            Crew
          </Link>
          <Link to="/technology" className="list">
            Technology
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destiantion />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
