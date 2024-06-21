import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import './CropSelection.css'; 

const CropSelection = () => {
  return (
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
            marginLeft: "15px",
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
          <hr style={{ margin: "0", width: "94.7%", marginLeft: "15px" }} />
        </div>
      </div>
    </div>
  );
};

export default CropSelection;
