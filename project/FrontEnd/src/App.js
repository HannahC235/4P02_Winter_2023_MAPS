import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './default/styles/map.css';
import './default/styles/grid.css';
import './default/styles/bootstrap.css';
import './default/styles/print.css';
//import './default/styles/queries.css';
//import './default/styles/screen.css';

// pages
import Home from "./pages/Home"
import Header from "./pages/Header"
import Footer from "./pages/Footer"


function App() {
  return (
    <div className="App">
      <Home />
      <Footer />
    </div>

  );
}

export default App;
