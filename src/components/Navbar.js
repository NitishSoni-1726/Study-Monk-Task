import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div
      className="bg-black bg-opacity-50"
      style={{
        height: "80px",
        display: "flex",
        alignItems: "center",
        padding: "50px",
        position: "fixed",
        top: "0",
        width: "100%",
        color: "white",
        borderBottom: "2px solid white",
      }}
    >
      <Link
        to="/"
        style={{
          letterSpacing: "15px",
          margin: "0",
          padding: "0",
          textDecoration: "none",
          color: "white",
          fontSize: "25px",
          fontWeight: "600",
        }}
      >
        STUDY-MONK
      </Link>
      <div className="flex-grow-1 ms-2 me-5">
        <ul className="d-flex align-items-center m-0">
          <li style={{ listStyle: "none" }} className="ms-4">
            <Link
              to="/"
              style={{
                fontSize: "25px",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Home
            </Link>
          </li>
          <li style={{ listStyle: "none" }} className="ms-4">
            <Link
              style={{
                fontSize: "25px",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              About
            </Link>
          </li>
          <li style={{ listStyle: "none" }} className="ms-4">
            <Link
              style={{
                fontSize: "25px",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Contact-Us
            </Link>
          </li>
          <li style={{ listStyle: "none" }} className="ms-4">
            <Link
              style={{
                fontSize: "25px",
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Feedback
            </Link>
          </li>
        </ul>
      </div>
      <div className="button d-flex">
        <Link to="/login" className="btn btn-outline-success btn-lg m-2">
          Login
        </Link>
        <Link to="/register" className="btn btn-outline-warning btn-lg m-2">
          Register
        </Link>
      </div>
    </div>
  );
}
