import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Registration from "./component/Registration";
import About from "./component/About";
import Counter from "./component/Counter";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Todo from "./component/Todo";
function App() {
  return (
    <div
      className="app-container"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/About" Component={About}></Route>
          <Route path="/Contact" Component={Contact}></Route>
          <Route path="/Registration" Component={Registration}></Route>
          <Route path="/Counter" Component={Counter}></Route>
          <Route path="/Todo" Component={Todo}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
