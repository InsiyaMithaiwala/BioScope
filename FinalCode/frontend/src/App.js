import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Register from "./components/Register";

const FormWithNavigation = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return <Form onSubmit={handleSubmit} />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Form" element={<FormWithNavigation />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
