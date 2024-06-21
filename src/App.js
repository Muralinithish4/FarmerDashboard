import './App.css';
import FarmerDashboard from './FarmerDashboard';
import React from 'react';
import NavButtons from './NavButtons'
import FarmerInfo from './FarmerInfo'
import CropMonitoring from './CropMonitoring';
import CropSelection from './CropSelection'
import Regulation from './Regulation';
function App() {
  return (
    <div style={{background:'ghostwhite'}} className="App">
     {/* <FarmerDashboard/> */}
     <NavButtons/>
     <FarmerInfo/>
     <CropSelection/>
     <CropMonitoring/>
     <Regulation/>
    </div>
  );
}

export default App;
