import React from 'react';
import Home from "./components/Intro/Intro";
import Form from "./components/Flats/NuevoFlat";
import Flats from "./components/Flats/ObtenerFlats";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="">
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/flats" element={<Flats />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
