import React from "react";
import { Line } from "react-chartjs-2";

const Graph = () => {
  return (
    <div style={{ width: "500px", height: "360px" }}>
      <Line
        data={{
          labels: [
            "1st Month",
            "2nd Month",
            "3rd Month",
            "4th Month",
            "5th Month",
            "6th Month",
            "7th Month",
            "8th Month",
            "9th Month",
          ],
          datasets: [
            {
              label: "Body Weight [Kg]",
              data: [55, 56, 58, 60, 61, 62],
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
