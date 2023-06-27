import React from "react";
import background from "./assets/background1.png";
import forHr from "./assets/rec-internal-hr.png";
import forStaffing from "./assets/rec-stafing-agency.png";
import sourceandattract from "./assets/source-and-attract-poster.jpg";
import trackandengage from "./assets/track-and-engage-poster.jpg";
import automateandhire from "./assets/automate-and-hire-poster.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <div
        className="text-light bg-black bg-opacity-75 d-flex annimation w-100 justify-content-between align-items-center"
        style={{ height: "90vh" }}
      >
        <div className="d-flex flex-column align-items-center justify-content-center m-4 p-4">
          <div className="w-75">
            <h1
              className="text-start"
              style={{
                fontWeight: "600",
                fontFamily: "monospace",
                fontSize: "35px",
              }}
            >
              <span className="text-success">Recruit</span> quality candidates
              with STUDY-MONK all-in-one talent acquisition solution
            </h1>
            <p className="text-start mt-3">
              STUDY-MONK Recruit offers a powerful ATS and CRM in a single
              recruitment platform. With scalability, customization, and remote
              hiring tools, Recruit has everything your staffing agency or
              internal HR team needs to match the right candidate to the right
              role.
            </p>
            <Link to="/register" className="btn btn-warning btn-lg mt-3">
              Get Started
            </Link>
          </div>
        </div>
        <div className="pe-5">
          <img src={background} alt="..." style={{}}></img>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center m-5 bg-light bg-opacity-75 rounded w-75">
        <h1 className="text-dark mt-5">
          Targeted recruitment demands targeted solutions
        </h1>
        <div className="d-flex text-dark mt-5 mb-5">
          <div className="d-flex align-items-center m-4 bg-success bg-opacity-75 border rounded p-5 w-50">
            <div className="w-75">
              <h1 className="align-self-start">For Staffing Agencies</h1>
              <p className="w-75 align-self-start">
                Source top quality candidates for your clients in no time.
              </p>
              <button className="btn btn-light align-self-start">
                Learn More {">"}
              </button>
            </div>
            <div className="w-25">
              <img src={forStaffing} alt="..." style={{ width: "95%" }}></img>
            </div>
          </div>
          <div className="d-flex align-items-center m-4 bg-warning bg-opacity-75 border rounded p-5 w-50">
            <div className="w-75">
              <h1 className="align-self-start">For Internal HR Teams</h1>
              <p className="align-self-start">
                Recruit the right people and build an unbeatable workforce.
              </p>
              <button className="btn btn-light align-self-start">
                Learn More {">"}
              </button>
            </div>
            <div className="w-25">
              <img src={forHr} alt="..." style={{ width: "95%" }}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="m-5">
        <div className="w-100 d-flex flex-column align-items-center justify-content-center">
          <h1 className="text-light w-75 text-center">
            Automated hiring software for the entire candidate journey
          </h1>
          <p className="w-50 text-center text-light">
            STUDY-MONK world-class recruitment software will help you find,
            evaluate, and communicate with candidates for any role. That means a
            more efficient hiring process and new hires that add more value to
            your organization or your clients.
          </p>
        </div>
        <div className="bg-light bg-opacity-25 p-4">
          <div className="w-100 m-5 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column align-items-start w-50">
              <h5 className="p-2 bg-warning bg-opacity-25 text-light mt-4">
                Source & Attract
              </h5>
              <h2 className="text-light mt-3 w-75">
                Create a candidate experience that can't be overlooked
              </h2>
              <p className="text-light mt-2 w-75">
                Post your jobs on 75+ job boards with a single click and share
                the listings instantly to all your social handles.
              </p>
              <button className="btn btn-outline-light mt-3">Learn More</button>
            </div>
            <div>
              <img
                src={sourceandattract}
                alt="..."
                style={{ width: "500px", height: "400px" }}
              ></img>
            </div>
          </div>

          <div className="w-100 m-5 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column align-items-start w-50">
              <h5 className="p-2 bg-primary bg-opacity-25 text-light mt-4">
                Track & Engage
              </h5>
              <h2 className="text-light mt-3 w-75">
                Build relationships right from recruitment, and make the right
                hire every time
              </h2>
              <p className="text-light mt-2 w-75">
                Keep track of where your candidates are at every hiring stage
                and optimize your recruitment process with advanced analytics.
              </p>
              <button className="btn btn-outline-light mt-3">Learn More</button>
            </div>
            <div>
              <img
                src={trackandengage}
                alt="..."
                style={{ width: "500px", height: "400px" }}
              ></img>
            </div>
          </div>
          <div className="w-100 m-5 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column align-items-start w-50">
              <h5 className="p-2 bg-success bg-opacity-25 text-light mt-4">
                Automate & Hire
              </h5>
              <h2 className="text-light mt-3 w-75">
                Go from interview to onboarding in a snap with custom automation
              </h2>
              <p className="text-light mt-2 w-75">
                Look in the best hire for every position with custom automation
                tools that push candidates through every stage in your hiring
                process.
              </p>
              <button className="btn btn-outline-light mt-3">Learn More</button>
            </div>
            <div>
              <img
                src={automateandhire}
                alt="..."
                style={{ width: "500px", height: "400px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-lg-start text-white bg-dark bg-opacity-50 w-100">
        <section className="d-flex justify-content-between p-4 bg-black bg-opacity-75">
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="!#" className="text-white me-4">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a href="!#" className="text-white me-4">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="!#" className="text-white me-4">
              <i className="fa fa-google"></i>
            </a>
            <a href="!#" className="text-white me-4">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="!#" className="text-white me-4">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="!#" className="text-white me-4">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Company name</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  mollitia officiis quia quasi hic asperiores dolores provident
                  rerum.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Menu</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Feedback
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Contact Us
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    About Us
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Hire Candidate
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Your Account
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Become an Affiliate
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Carrier
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Help
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <i className="fa fa-home mr-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fa fa-envelope mr-3"></i> info@example.com
                </p>
                <p>
                  <i className="fa fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fa fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright: Designed By Nitish
        </div>
      </footer>
    </div>
  );
}
