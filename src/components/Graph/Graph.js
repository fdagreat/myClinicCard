import React from "react";
import { Line } from "react-chartjs-2";

const Graph = () => {
  return (
    <div style={{ width: "500px", height: "360px" }}>
      <Line
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
          ],
          datasets: [
            {
              label: "Body Weight [Kg]",
              data: [0, 0, 0, 60, 61, 62],
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
