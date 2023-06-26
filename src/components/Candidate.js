import React from "react";
export default function Candidate(props) {
  const { onFavClick } = props;

  return (
    <div className="w-100 d-flex flex-column align-items-center mb-1">
      <div className="w-100 text-light ps-3 pe-3">
        <div className="d-flex p-3 pt-3 pb-3 w-100 m-0 align-items-center bg-success bg-opacity-25">
          <div style={{ width: "7%" }} className="text-center">
            <img
              src={props.individualData.profile}
              alt="..."
              className="bg-light"
              style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            ></img>
          </div>
          <div
            style={{ width: "25%", fontSize: "20px" }}
            className="text-start ps-3"
          >
            {props.individualData.name}
          </div>
          <div
            style={{ width: "10%", fontSize: "20px" }}
            className="text-center"
          >
            {props.individualData.experience} Years
          </div>
          <div
            style={{ width: "25%", fontSize: "20px" }}
            className="text-center ps-4"
          >
            {props.individualData.tags}
          </div>
          <div
            style={{ width: "15%", fontSize: "20px" }}
            className="text-center ps-4"
          >
            {props.individualData.location}
          </div>
          <div
            style={{ width: "15%", fontSize: "20px" }}
            className="text-center ps-4"
          >
            <a
              className="p-2"
              style={{ color: "white", cursor: "pointer" }}
              href={props.individualData.social.instagram}
            >
              <i className="fa fa-instagram" />
            </a>
            <a
              className="p-2"
              style={{ color: "white", cursor: "pointer" }}
              href={props.individualData.social.linkedin}
            >
              <i className="fa fa-linkedin" />
            </a>
            <a
              className="p-2"
              style={{ color: "white", cursor: "pointer" }}
              href={props.individualData.social.twitter}
            >
              <i className="fa fa-twitter" />
            </a>
            <a
              className="p-2"
              style={{ color: "white", cursor: "pointer" }}
              href={props.individualData.social.github}
            >
              <i className="fa fa-github" />
            </a>
          </div>
          {props.individualData.saved ? (
            <button
              className="btn btn-warning ms-3"
              title="Remove from saved"
              onClick={onFavClick}
            >
              <i className="fa fa-star" />
            </button>
          ) : (
            <button
              className="btn btn-warning ms-3"
              title="Save candidate"
              onClick={onFavClick}
            >
              <i className="fa fa-star-o" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
