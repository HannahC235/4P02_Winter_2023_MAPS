import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './default/styles/map.css';
import './default/styles/grid.css';
import './default/styles/bootstrap.css';
import './default/styles/print.css';
//import './default/styles/queries.css';
//import './default/styles/screen.css';

// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"


function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Supa Smoothies</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Smoothie</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
