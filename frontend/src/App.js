import { Link, Route, Routes } from "react-router-dom";

// Page Components
import Crew from "./pages/Crew.js";
import Home from "./pages/Home.js";
import Destiantion from "./pages/Destiantion.js";
import Technology from "./pages/Technology.js";

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
        <Route path="/" elements={<Home />} />
        <Route path="/destination" elements={<Destiantion />} />
        <Route path="/crew" elements={<Crew />} />
        <Route path="/technology" elements={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
