import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import './FarmerInfo.css';

const FarmerInfo = () => {
  return (
    <div className="farmer-info">
      <IoIosArrowBack className="arrow" />
      <div className="flex">
        <img className="farmer-photo" alt=" " />
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
  );
}

export default FarmerInfo;
