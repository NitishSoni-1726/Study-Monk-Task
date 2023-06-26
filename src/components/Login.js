import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Login(props) {
  const navigate = useNavigate();
  const emailId = React.createRef();
  const password = React.createRef();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  function handleShowPassword(event) {
    if (event.target.checked) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  }
  function handleLogin(event) {
    event.preventDefault();
    const userList = props.userData;
    for (let i = 0; i < userList.length; i++) {
      if (
        userList[i].email_id === emailId.current.value &&
        userList[i].password === password.current.value
      ) {
        setError("");
        props.login(true);
        navigate("/dashboard");
      } else if (
        userList[i].email_id === emailId.current.value &&
        userList[i].password !== password.current.value
      ) {
        setError("Invalid Password");
      } else {
        setError("No User Found");
      }
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "89vh",
        width: "100%",
      }}
    >
      <div
        className="bg-black bg-opacity-25 rounded annimation"
        style={{
          border: "2px solid white",
          width: "40%",
          padding: "3%",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            margin: "0",
            padding: "0",
            color: "white",
            cursor: "default",
          }}
        >
          Login
        </h1>
        <form style={{ width: "90%", marginTop: "3%" }} onSubmit={handleLogin}>
          <div className="mt-2">
            <label style={{ fontSize: "15px" }}>
              Buisness Email <span className="text-danger">*</span>
            </label>
            <input
              ref={emailId}
              type="email"
              className="bg-secondary rounded bg-opacity-25"
              style={{ width: "100%", padding: "2%", color: "white" }}
              required
            ></input>
          </div>
          <div className="mt-2">
            <label style={{ fontSize: "15px" }}>
              Password <span className="text-danger">*</span>
            </label>
            <input
              ref={password}
              type={showPassword ? "text" : "password"}
              className="bg-secondary rounded bg-opacity-25"
              style={{ width: "100%", padding: "2%", color: "white" }}
              required
            ></input>
          </div>
          <div className="d-flex align-items-center mt-2 ms-2">
            <input
              type="checkbox"
              style={{ transform: "scale(1.5)" }}
              onChange={handleShowPassword}
            ></input>
            <label className="ms-2">Show Password</label>
          </div>
          <div className="text-danger ms-1" style={{ fontSize: "20px" }}>
            {error}
          </div>
          <div className="mt-4">
            <button className="btn btn-success btn-lg w-100" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="mt-3">
          <div style={{ wordSpacing: "5px" }}>
            Don't Have an Account ?
            <Link
              className="text-warning"
              to="/register"
              style={{
                textDecoration: "none",
                fontWeight: "600",
                wordSpacing: "2px",
              }}
            >
              {" "}
              Click Here{" "}
            </Link>
            to Register
          </div>
        </div>
      </div>
    </div>
  );
}
