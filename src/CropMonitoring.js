import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './CropMonitoring.css';
const stages = [
  {
    stage: "Stage 1",
    description: "Preparation of Soil",
    steps: 5,
    circleClass: "outer-circle-stage1",
    innerCircleClass: "inner-circle-stage1"
  },
  {
    stage: "Stage 2",
    description: "Soil Testing",
    steps: 6,
    circleClass: "outer-circle-stage2",
    innerCircleClass: "inner-circle-stage2"
  },
  {
    stage: "Stage 3",
    description: "Adding Manure & Fertilizers",
    steps: 15,
    circleClass: "outer-circle-stage1",
    innerCircleClass: "inner-circle-stage1"
  },
  {
    stage: "Stage 4",
    description: "Preparation of Seed",
    steps: 5,
    circleClass: "outer-circle",
    innerCircleClass: "inner-circle"
  },
  {
    stage: "Stage 5",
    description: "Seeding",
    steps: 5,
    circleClass: "outer-circle-stage1",
    innerCircleClass: "inner-circle-stage1"
  },
  {
    stage: "Stage 6",
    description: "Sowing",
    steps: 6,
    circleClass: "outer-circle-stage2",
    innerCircleClass: "inner-circle-stage2"
  },
  {
    stage: "Stage 7",
    description: "Pest Control",
    steps: 15,
    circleClass: "outer-circle-stage1",
    innerCircleClass: "inner-circle-stage1"
  },
  {
    stage: "Stage 8",
    description: "Irrigation",
    steps: 5,
    circleClass: "outer-circle",
    innerCircleClass: "inner-circle"
  }
];

const CropMonitoring = () => {
  return (
    <>
    <p
            style={{
              marginLeft: "15px",
              fontWeight: "500",
              fontFamily: "Work Sans",
            }}
          >
            Crop Monitoring
          </p>
      {stages.map((stage, index) => (
        <div className="Crop-monitoring" key={index}>
          <div className="parent-stage">
            <div className="stage-container">
              <div className="stage">
                {stage.stage}
                <div className={stage.circleClass}>
                  <div className={stage.innerCircleClass}></div>
                </div>
              </div>
              <p className="soil">{stage.description}</p>
              <div className="stage-view">
                No. of steps - {stage.steps}
                <div className="view">
                  <a href="#">View</a>
                  <FaArrowRight className="stage-arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CropMonitoring;
