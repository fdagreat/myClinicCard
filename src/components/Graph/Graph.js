import React from "react";
import { Line } from "react-chartjs-2";

const Graph = () => {
  return (
    <div style={{ width: "400px", height: "300px" }}>
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
              data: [55, 58, 68, 68, 69, 73],
              backgroundColor: ["#6EE7B7"],
              borderColor: ["#6EE7B7"],
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
