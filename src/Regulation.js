import React from 'react';
import './Regulation.css';

const Regulation = () => {
  return (
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
              alt="Regulation"
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
              alt="Regulation"
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
              alt="Regulation"
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
              alt="Regulation"
            />
            <p className="ID">ID - 12345</p>
          </div>
          <p className="global">Global Gap</p>
          <button className="view-btn">View</button>
        </div>
      </div>
    </div>
  );
};

export default Regulation;
