import Header from "./components/Header/Header.jsx";
import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/1.home/home.jsx";
import Try from "./components/try.jsx";
import Services from "./pages/3.services/services.jsx";
import Admin from "./pages/admin/admin.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/services" Component={Services} />
        <Route path="/admin/*" Component={Admin} />
      </Routes>
    </Router>
  );
}

export default App;
