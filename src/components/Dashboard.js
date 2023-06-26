import React, { useState } from "react";
import Candidate from "./Candidate";
import { CandidateData } from "./data";
export default function Dashboard() {
  const [data, setData] = useState(CandidateData);
  const [ascendingSort, setAscendingSort] = useState(false);
  const [descendingSort, setDescendingSort] = useState(false);
  const [savedFilter, setSavedFilter] = useState(false);
  const [searchStr, setSearchStr] = useState("");

  function handleSearch(event) {
    setSearchStr(event.target.value);
  }
  function handleAllCandidates() {
    setAscendingSort(false);
    setDescendingSort(false);
    setSavedFilter(false);
    setData(CandidateData);
  }
  function handleSavedFilter() {
    setSavedFilter(true);
    setAscendingSort(false);
    setDescendingSort(false);
  }
  function handleAscending() {
    setAscendingSort(true);
    setDescendingSort(false);
  }
  function handleDescending() {
    setDescendingSort(true);
    setAscendingSort(false);
  }
  let filtereddata = [...data];
  if (savedFilter) {
    filtereddata = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].saved === true) {
        filtereddata.push(data[i]);
      }
    }
  }
  if (ascendingSort) {
    for (let i = 1; i < filtereddata.length; i++) {
      for (let j = 0; j < i - 1; j++) {
        if (filtereddata[i].experience > filtereddata[j].experience) {
          let x = filtereddata[i];
          filtereddata[i] = filtereddata[j];
          filtereddata[j] = x;
        }
      }
    }
  }
  if (descendingSort) {
    for (let i = 1; i < filtereddata.length; i++) {
      for (let j = 0; j < i - 1; j++) {
        if (filtereddata[i].experience < filtereddata[j].experience) {
          let x = filtereddata[i];
          filtereddata[i] = filtereddata[j];
          filtereddata[j] = x;
        }
      }
    }
  }
  if (searchStr) {
    const filteredDataTemp = [...filtereddata];
    filtereddata = [];
    for (let i = 0; i < filteredDataTemp.length; i++) {
      if (
        filteredDataTemp[i].tags
          .toLowerCase()
          .includes(searchStr.toLowerCase()) ||
        filteredDataTemp[i].location
          .toLowerCase()
          .includes(searchStr.toLowerCase())
      ) {
        filtereddata.push(filteredDataTemp[i]);
      }
    }
  }

  function handleFavClick(id) {
    const indexToToggle = data.findIndex((candidate) => candidate.id === id);

    data[indexToToggle].saved = !data[indexToToggle].saved;
    setData([...data]);
  }

  return (
    <div
      className="dashboard annimation"
      style={{ height: "89vh", width: "100%" }}
    >
      <div
        className="text-light d-flex align-items-center w-100 bg-dark bg-opacity-25"
        style={{
          height: "10vh",
          borderBottom: "2px solid white",
          position: "fixed",
        }}
      >
        <ul
          className="d-flex align-items-center w-100 m-0"
          style={{ fontSize: "25px" }}
        >
          <div
            className="d-flex ms-4 me-4 flex-grow-1"
            style={{ listStyle: "none" }}
          >
            <input
              type="text"
              className="bg-secondary bg-opacity-25 border rounded text-light w-75"
              onKeyUp={handleSearch}
            ></input>
            <button className="btn btn-success ms-2">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
          <li className="me-4" style={{ listStyle: "none" }}>
            <button
              className="btn btn-success btn-lg"
              onClick={handleAllCandidates}
            >
              All Candidates
            </button>
          </li>
          <li className="me-4" style={{ listStyle: "none" }}>
            <button
              className="btn btn-warning btn-lg"
              onClick={handleSavedFilter}
            >
              Saved Candidates <i className="fa fa-bookmark"></i>
            </button>
          </li>
          <h4 style={{ margin: "0" }}>Work Experience</h4>
          <li className="ms-2 me-2" style={{ listStyle: "none" }}>
            <button className="btn btn-secondary" onClick={handleAscending}>
              <i className="fa fa-arrow-up"></i>
            </button>
          </li>
          <li className="ms-2 me-2" style={{ listStyle: "none" }}>
            <button className="btn btn-secondary" onClick={handleDescending}>
              <i className="fa fa-arrow-down"></i>
            </button>
          </li>
          <li className="ms-2 me-2" style={{ listStyle: "none" }}></li>
        </ul>
      </div>
      <div
        style={{
          position: "fixed",
          top: "21%",
          height: "79vh",
          overflowY: "scroll",
          width: "100%",
        }}
      >
        <div className="text-light w-100 d-flex flex-column align-items-center m-0">
          <div
            className="d-flex p-3 w-100 bg-black bg-opacity-25 m-0"
            style={{ position: "fixed" }}
          >
            <h6 style={{ width: "10%" }} className="text-center">
              Profile
            </h6>
            <h6>|</h6>
            <h6 style={{ width: "25%" }} className="text-center">
              Candidate Name
            </h6>
            <h6>|</h6>
            <h6 style={{ width: "10%" }} className="text-center">
              Work Experience
            </h6>
            <h6>|</h6>
            <h6 style={{ width: "25%" }} className="text-center">
              Tags
            </h6>
            <h6>|</h6>
            <h6 style={{ width: "15%" }} className="text-center">
              Location
            </h6>
            <h6>|</h6>
            <h6 style={{ width: "15%" }} className="text-center">
              Socials
            </h6>
          </div>
          <div
            style={{
              position: "fixed",
              top: "29%",
              height: "70vh",
              overflowY: "scroll",
              width: "100%",
            }}
          >
            {filtereddata.map((candidate, index) => {
              return (
                <Candidate
                  key={index}
                  individualData={candidate}
                  onFavClick={() => {
                    handleFavClick(candidate.id);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
