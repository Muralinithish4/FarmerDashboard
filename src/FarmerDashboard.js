// Developed By: Murali
import React from "react";
import "./FarmerDashboard.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const FarmerDashboard = () => {
  return (
    <div className="dashboard">
      <div className="nav-container">
        {/* <nav className="navbar"> */}
        <button
          style={{
            boxShadow: "0px 4px 7.4px #0000001A",
            zIndex: 10,
            borderRadius: "7px",
            padding: "10px 20px",
            fontSize: "15px",
          }}
          className="nav-button"
        >
          Survey
        </button>
        <button
          style={{
            boxShadow: "0px 4px 7.4px #0000001A",
            zIndex: 9,
            borderRadius: "7px",
            padding: "10px 20px",
            fontSize: "15px",
          }}
          className="nav-button"
        >
          Survey Name
        </button>
        <button
          style={{
            boxShadow: "0px 4px 7.4px #0000001A",
            zIndex: 8,
            borderRadius: "7px",
            padding: "10px 20px",
            fontSize: "15px",
          }}
          className="nav-button"
        >
          Team
        </button>
        <button
          style={{
            boxShadow: "0px 4px 7.4px #0000001A",
            zIndex: 7,
            borderRadius: "7px",
            padding: "10px 20px",
            fontSize: "15px",
          }}
          className="nav-button"
        >
          FO
        </button>
        <button
          style={{
            boxShadow: "0px 4px 7.4px #0000001A",
            zIndex: 6,
            borderRadius: "7px",
            padding: "10px 20px",
            fontSize: "15px",
          }}
          className="nav-button active"
        >
          Farmer
        </button>
        {/* </nav> */}
      </div>
      {/* // Developed By: Murali */}

      <div className="farmer-info">
        <IoIosArrowBack className="arrow" />
        <div className="flex">
          <img className="farmer-photo" />
          <div className="farmer-details">
            <div className="parent-container">
              <div className="farmer-container">
                <div className="name">Name</div>
                <div className="text">Bhuvesh Kumar</div>
              </div>

              <div>
                <div className="id">ID</div>
                <div className="no">123492</div>
              </div>
            </div>
            <div className="child-container">
              <div>
                <div className="phno">Phone number</div>
                <div className="phno-text">+919534289188</div>
              </div>
              <div>
                <div className="location">Farmer Location</div>
                <div className="state-name">Guntur</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="crop-selection">
          <label
            style={{
              padding: "10px",
              fontWeight: "500",
              fontFamily: "Work Sans",
            }}
            htmlFor="crop"
          >
            {" "}
            Crop
          </label>
          <IoIosArrowDown />
        </div>
        <div className="crop-tabs">
          <button className="tobacco">Tobacco</button>
          <button className="active"> Chilli</button>
          <button className="ginger">Ginger</button>
        </div>
        <div className="line">
          <hr
            style={{
              margin: "0",
              color: "gainsboro",
              width: "94.7%",
              marginLeft: "12px",
            }}
          />
        </div>
        <div>
          <div className="field-container">
            <div className="field">
              <div className="field-id">Field ID</div>
              <div className="number">KK001</div>
            </div>
            <div className="field">
              <div className="field-Location">Field Location</div>
              <div className="fl">Grandhasiri</div>
            </div>
          </div>
          <div>
            <hr style={{ margin: "0", width: "94.7%", marginLeft: "12px" }} />
          </div>
          {/* stage-container */}
          <p
            style={{
              marginLeft: "10px",
              fontWeight: "500",
              fontFamily: "Work Sans",
            }}
          >
            Crop Monitoring
          </p>
          <div className="Crop-monitoring">
            <div className="parent-stage">
              <div className="stage-container">
                <div className="stage">
                  Stage 1
                  <div class="outer-circle-stage1">
                    <div class="inner-circle-stage1"></div>
                  </div>
                </div>
                <p className="soil">preparation of soil</p>
                <div className="stage-view">
                  No. of steps -05{" "}
                  <div className="view">
                    {" "}
                    <a href="#">View</a>
                    <FaArrowRight className="stage-arrow" />
                  </div>
                </div>
              </div>

              <div className="stage-container">
                <div className="stage">
                  Stage 2
                  <div class="outer-circle-stage2">
                    <div class="inner-circle-stage2"></div>
                  </div>
                </div>
                <p className="soil">Soil Testing</p>
                <div className="stage-view">
                  No. of steps -06{" "}
                  <div className="view">
                    {" "}
                    <a href="#">View</a>
                    <FaArrowRight className="stage-arrow" />
                  </div>
                </div>
              </div>

              <div className="stage-container">
                <div className="stage">
                  Stage 3
                  <div class="outer-circle-stage1">
                    <div class="inner-circle-stage1"></div>
                  </div>
                </div>
                <p style={{ width: "80%" }} className="soil">
                  Adding Manure &
                  Fertilizers
                </p>
                <div className="stage-view">
                  No. of steps -15{" "}
                  <div className="view">
                    {" "}
                    <a href="#">View</a>
                    <FaArrowRight className="stage-arrow" />
                  </div>
                </div>
              </div>

              <div className="stage-container">
                <div className="stage">
                  Stage 4
                  <div class="outer-circle">
                    <div class="inner-circle"></div>
                  </div>
                </div>
                <p className="soil">preparation of seed</p>
                <div className="stage-view">
                  No. of steps -05{" "}
                  <div className="view">
                    {" "}
                    <a href="#">View</a>
                    <FaArrowRight className="stage-arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Crop-monitoring">
            <div className="parent-stage">
              <div className="stage-container">
                <div className="stage">
                  Stage 5
                  <div class="outer-circle-stage1">
                    <div class="inner-circle-stage1"></div>
                  </div>
                </div>
                <p className="soil">Seeding</p>
                <div className="stage-view">
                  No. of steps -05{" "}
                  <div className="view">
                    {" "}
                    <a href="#">View</a>
                    <FaArrowRight className="stage-arrow" />
                  </div>
                </div>
              </div>

              <div className="stage-container">
                <div className="stage">
                  Stage 6
                  <div class="outer-circle-stage2">
                    <div class="inner-circle-stage2"></div>
                  </div>
                </div>
                <p className="soil">Sowing</p>
                <div className="stage-view">
                  No. of steps -06{" "}
                  <div className="view">
                    {" "}
                    <a href="#">View</a>
                    <FaArrowRight className="stage-arrow" />
                  </div>
                </div>
              </div>

              <div className="stage-container">
                <div className="stage">
                  Stage 7
                  <div class="outer-circle-stage1">
                    <div class="inner-circle-stage1"></div>
                  </div>
                </div>
                <p className="soil">Pest</p>
                <div className="stage-view">
                  No. of steps -15{" "}
                  <div className="view">
                    {" "}
                    <a href="#">View</a>
                    <FaArrowRight className="stage-arrow" />
                  </div>
                </div>
              </div>

              <div className="stage-container">
                <div className="stage">
                  Stage 8
                  <div class="outer-circle">
                    <div class="inner-circle"></div>
                  </div>
                </div>

                <p className="soil">Irrigation</p>
                <div className="stage-view">
                  No. of steps -05{" "}
                  <div className="view">
                    {" "}
                    <a href="#">View</a>
                    <FaArrowRight className="stage-arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Regulations */}
          <div className="regulation">
            <h4 style={{ fontWeight: "500", fontFamily: "Work Sans" }}>
              Regulation
            </h4>
            <div className="regulation-cards">
              <div style={{ background: "#e9eff1" }} className="card">
                <div className="img-container">
                  <img
                    style={{ height: "60px", width: "60px" }}
                    src="/Assert/pic.png"
                  />
                  <p>ID - 12345</p>
                </div>
                <p className="global">Global Gap</p>
                <button className="view-btn">View</button>
              </div>
              <div style={{ background: "#faebd770" }} className="card">
                <div className="img-container">
                  <img
                    style={{ height: "60px", width: "60px" }}
                    src="/Assert/pic.png"
                  />
                  <p>ID - 12345</p>
                </div>
                <p className="global">Global Gap</p>
                <button className="view-btn">View</button>
              </div>
              <div style={{ background: "#e9eff1" }} className="card">
                <div className="img-container">
                  <img
                    style={{ height: "60px", width: "60px" }}
                    src="/Assert/pic.png"
                  />
                  <p>ID - 12345</p>
                </div>
                <p className="global">Global Gap</p>
                <button className="view-btn">View</button>
              </div>
              <div style={{ background: "#faebd770" }} className="card">
                <div className="img-container">
                  <img
                    style={{ height: "60px", width: "60px" }}
                    src="/Assert/pic.png"
                  />
                  <p className="ID">ID - 12345</p>
                </div>
                <p className="global">Global Gap</p>
                <button className="view-btn">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FarmerDashboard;
