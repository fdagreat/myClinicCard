import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

const Graph = () => {
  const bodyData = useSelector((state) => state.bodyWeight);
  return (
    <div style={{ width: "500px", height: "360px" }}>
      <Line
        data={{
          labels: [
            "1st month",
            "2nd month",
            "3rd month",
            "4th month",
            "5th month",
            "6th month",
            "7th month",
            "8th month",
            "9th month",
            "10th month",
          ],
          datasets: [
            {
              label: "Body Weight [Kg]",
              data: bodyData,
              backgroundColor: ["#6EE7B7"],
              borderColor: ["#6EE7B7"],
              fill: false,
              borderWidth: 1.5,
            },
          ],
        }}
        height={300}
        width={400}
      />
    </div>
  );
};

export default Graph;
