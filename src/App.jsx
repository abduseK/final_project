import Header from "./components/Header/Header.jsx";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/1.home/home.jsx";
import Services from "./pages/3.services/services.jsx";
import Admin from "./pages/admin/admin.jsx";
import IDForm from "./components/Forms/IdForm/IDForm.jsx";
import Login from "./components/Auth 2/Login.jsx";
import AuthPage from "./components/authForms/AuthComponent.jsx";
import BirthForm from "./components/Forms/BirthForm/BirthForm.jsx";
import DeathForm from "./components/Forms/DeathForm/DeathForm.jsx";
import WedForm from "./components/Forms/WeddingForm/WedForm.jsx";
import RRForm from "./components/Forms/ResidentRegForm/RRForm.jsx";
import HashLoader from "react-spinners/HashLoader";
import WitnessForm from "./components/Forms/WitnessForm/WitnessForm.jsx";
import RejectForm from "./components/Forms/RejectForm/RejectForm.jsx";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <HashLoader color={"#00a967"} loading={loading} size={100} />
        </div>
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/services" Component={Services} />
            <Route path="/admin/*" Component={Admin} />
            <Route path="/application/id" Component={IDForm} />
            <Route path="/application/birth" Component={BirthForm} />
            <Route path="/application/death" Component={DeathForm} />
            <Route path="/application/wedding" Component={WedForm} />
            <Route path="/application/resident" Component={RRForm} />
            <Route path="/application/reject" Component={RejectForm} />
            <Route path="/application/witness" Component={WitnessForm} />
            <Route path="/users/login" Component={Login} />
            <Route path="/users/auth" Component={AuthPage} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
