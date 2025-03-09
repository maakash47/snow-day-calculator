import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Gauge = ({ percentage }) => {
  return (
    <div className="w-32 md:w-40 mx-auto mt-4">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: "16px",
          pathColor: `hsl(213,94%,67%), ${percentage / 100})`,
          textColor: "#333",
          trailColor: "#ddd",
        })}
      />
    </div>
  );
};

export default Gauge;
