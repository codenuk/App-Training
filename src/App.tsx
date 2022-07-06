import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ICombineReducers } from "./redux/reducers";

import MainPage from "./pages/Main";
import AboutPage from "./pages/About";
import LoginPage from "./pages/Login";
import FormikPage from "./pages/Formik";

function App() {
  const [count, setCount] = useState(0);
  const stateRedux = useSelector(
    (state: ICombineReducers) => state.testReducer
  );

  useEffect(() => {
    if (count === 10) {
      setCount(0);
    }
  }, [count]);

  return (
    <div>
      <p>You Clicked {count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <br></br>
      <Link to="/">Main</Link> <Link to="/about">About</Link>{" "}
      <Link to="/login">Login</Link> <Link to="/formik">Formik</Link>
      <br></br>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/formik" element={<FormikPage />} />
      </Routes>
    </div>
  );
}

export default App;
