import React from "react";
import { displayFitnessTips } from '../service/api';
const addUserDetails = async() => {
  await displayFitnessTips();
  
}
const FitnessTips = () => {
  return (
    <>
  <h2>My Fitness Tip:-</h2>
    <div id="fitness-tips" className="fs-3">
      
      
    </div>
    <div className="butn d-flex justify-content-center">
        {" "}
        <button type="button" className="btn btn-primary " id="tips_btn" onClick={() => addUserDetails()}>
          Get Tips
        </button>
      </div>
    </>
  );
};

export default FitnessTips;
