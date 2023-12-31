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
  function handleFilter(e) {
    if (e.target.value === "All Candidate") {
      handleAllCandidates();
    } else {
      handleSavedFilter();
    }
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
          <select
            className="btn btn-secondary bg-black btn-lg me-4"
            onChange={handleFilter}
          >
            <option value="All Candidate" onClick={handleAllCandidates}>
              All Candidate
            </option>
            <option value="Saved Candidate" onClick={handleSavedFilter}>
              Saved Candidate
            </option>
          </select>
          <h4 style={{ margin: "0" }}>Sort By Experience</h4>
          <li className="ms-2 me-1" style={{ listStyle: "none" }}>
            <button
              className="btn btn-secondary btn-sm"
              onClick={handleAscending}
            >
              <i className="fa fa-arrow-up"></i>
            </button>
          </li>
          <li className="ms-1 me-2" style={{ listStyle: "none" }}>
            <button
              className="btn btn-secondary btn-sm"
              onClick={handleDescending}
            >
              <i className="fa fa-arrow-down"></i>
            </button>
          </li>
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
            className="d-flex w-100 bg-black bg-opacity-25 m-0"
            style={{ position: "fixed", borderBottom: "1px solid white" }}
          >
            <h6
              style={{ width: "10%", borderRight: "1px solid white" }}
              className="text-center p-3"
            >
              Profile
            </h6>

            <h6
              style={{ width: "22%", borderRight: "1px solid white" }}
              className="text-center p-3"
            >
              Candidate Name
            </h6>
            <h6
              style={{ width: "13%", borderRight: "1px solid white" }}
              className="text-center p-3"
            >
              Work Experience
            </h6>
            <h6
              style={{ width: "25%", borderRight: "1px solid white" }}
              className="text-center p-3"
            >
              Tags
            </h6>
            <h6
              style={{ width: "15%", borderRight: "1px solid white" }}
              className="text-center p-3"
            >
              Location
            </h6>
            <h6 style={{ width: "15%" }} className="text-center p-3">
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
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
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
    </div>
  );
}
