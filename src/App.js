import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
function App() {
  const [registeredUser, setRegisteredUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <Router>
      <div>
        <Navbar loginState={loggedIn} logout={setLoggedIn} />
        <div
          style={{
            position: "fixed",
            top: "10.5%",
            height: "89vh",
            overflowY: "scroll",
            width: "100%",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {loggedIn ? (
              <Route path="/dashboard" element={<Dashboard />}></Route>
            ) : (
              <>
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
                  element={
                    <Login userData={registeredUser} login={setLoggedIn} />
                  }
                ></Route>
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
