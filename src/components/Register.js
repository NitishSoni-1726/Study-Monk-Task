import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import quality from "./assets/quality.png";
import attract from "./assets/attract.png";
import manage from "./assets/manage.png";
export default function Register(props) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const role = React.createRef();
  const password = React.createRef();
  const firstName = React.createRef();
  const lastName = React.createRef();
  const emailId = React.createRef();
  const company = React.createRef();
  let response = "";
  function registerUser(event) {
    event.preventDefault();
    for (let i = 0; i < props.userData.length; i++) {
      if (props.userData[i].email_id === emailId.current.value) {
        console.log("hello");
        response = "User Already Registered";
        setError(response);
        break;
      }
    }
    if (response === "") {
      let newUser = {
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        email_id: emailId.current.value,
        role: role.current.value,
        company: company.current.value,
        password: password.current.value,
      };
      const user = [newUser];
      let userList = props.userData.concat(user);
      props.handleRegistration(userList);
      navigate("/login");
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "50%",
          color: "white",
          margin: "3%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ letterSpacing: "10px" }}>
          <span className="text-danger">Start Hiring </span>Your Best Team
        </h1>
        <h2 style={{ wordSpacing: "5px" }}>
          This platform will help you reach your hiring goals
        </h2>
        <div className="mt-5">
          <div className="d-flex flex-column align-items-center mt-2">
            <img
              src={attract}
              alt="..."
              style={{ width: "50px", height: "50px" }}
            ></img>
            <h2 className="text-success">Attract quality applicants</h2>
            <p
              style={{ width: "70%", wordSpacing: "5px", fontSize: "20px" }}
              className="text-center"
            >
              Easily market your open roles across multiple channels to connect
              with top job seekers and increase your applicant flow
            </p>
          </div>
          <div className="d-flex flex-column align-items-center mt-2">
            <img
              src={quality}
              alt="..."
              style={{ width: "50px", height: "50px" }}
            ></img>
            <h2 className="text-primary">Hire top performers</h2>
            <p
              style={{ width: "70%", wordSpacing: "5px", fontSize: "20px" }}
              className="text-center"
            >
              Hire top performers Run a more efficient and engaging hiring
              process so you can identify top candidates and quickly hire the
              best
            </p>
          </div>
          <div className="d-flex flex-column align-items-center mt-2">
            <img
              src={manage}
              alt="..."
              style={{ width: "50px", height: "50px" }}
            ></img>
            <h2 className="text-warning">Manage new hires</h2>
            <p
              style={{ width: "70%", wordSpacing: "5px", fontSize: "20px" }}
              className="text-center"
            >
              Drive productivity and ensure compliance post-hire with an
              all-in-one suite of employee management tools
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "40%",
          margin: "1.7%",
          marginRight: "5%",
          height: "82vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="bg-black bg-opacity-25 rounded annimation"
          style={{
            border: "2px solid white",
            width: "100%",
            padding: "3%",
            color: "white",
            display: "flex",
            height: "75vh",
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
            Get Started
          </h1>
          <form
            style={{ width: "90%", marginTop: "1%" }}
            onSubmit={registerUser}
          >
            <div className="mt-2">
              <label style={{ fontSize: "15px" }}>
                First Name <span className="text-danger">*</span>
              </label>
              <input
                ref={firstName}
                type="text"
                className="bg-secondary rounded bg-opacity-25"
                style={{ width: "100%", padding: "2%", color: "white" }}
                required
              ></input>
            </div>
            <div className="mt-1">
              <label style={{ fontSize: "15px" }}>
                Last Name <span className="text-danger">*</span>
              </label>
              <input
                ref={lastName}
                type="text"
                className="bg-secondary rounded bg-opacity-25"
                style={{ width: "100%", padding: "2%", color: "white" }}
                required
              ></input>
            </div>
            <div className="mt-1">
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
            <div className="mt-1">
              <label style={{ fontSize: "15px" }}>
                Role <span className="text-danger">*</span>
              </label>
              <input
                ref={role}
                type="text"
                className="bg-secondary rounded bg-opacity-25"
                style={{ width: "100%", padding: "2%", color: "white" }}
                required
              ></input>
            </div>
            <div className="mt-1">
              <label style={{ fontSize: "15px" }}>
                Company Name <span className="text-danger">*</span>
              </label>
              <input
                ref={company}
                type="text"
                className="bg-secondary rounded bg-opacity-25"
                style={{ width: "100%", padding: "2%", color: "white" }}
                required
              ></input>
            </div>
            <div className="mt-1">
              <label style={{ fontSize: "15px" }}>
                Password <span className="text-danger">*</span>
              </label>
              <input
                ref={password}
                type="password"
                className="bg-secondary rounded bg-opacity-25"
                style={{ width: "100%", padding: "2%", color: "white" }}
                minLength="6"
                required
              ></input>
            </div>
            <div className="text-danger ms-1" style={{ fontSize: "20px" }}>
              {error}
            </div>
            <div className="mt-4">
              <button className="btn btn-warning btn-lg w-100" type="submit">
                Register
              </button>
            </div>
          </form>
          <div className="mt-3">
            <div style={{ wordSpacing: "5px" }}>
              Already Have an Account ?
              <Link
                className="text-success"
                to="/login"
                style={{
                  textDecoration: "none",
                  fontWeight: "600",
                  wordSpacing: "2px",
                }}
              >
                {" "}
                Click Here{" "}
              </Link>
              to Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
