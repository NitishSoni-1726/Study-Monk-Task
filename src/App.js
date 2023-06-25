import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [registeredUser, setRegisteredUser] = useState([]);
  return (
    <Router>
      <div>
        <Navbar />
        <div
          style={{
            position: "fixed",
            top: "11%",
            height: "89vh",
            overflowY: "scroll",
            width: "100%",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/register"
              element={
                <Register
                  handleRegistration={setRegisteredUser}
                  userData={registeredUser}
                />
              }
            ></Route>
            <Route
              path="/login"
              element={<Login userData={registeredUser} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
