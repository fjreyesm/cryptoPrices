import React from "react";

import { TinyLine } from "@ant-design/plots";
//import { Line } from "@ant-design/plots";

const GraphLast7d = ({ spark }) => {
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
    546, 983, 340, 539, 243, 226, 192,
  ];

  console.log("spark recibido: " + spark);
  const config = {
    height: 40,
    autoFit: true,
    data,
    smooth: false,
  };

  return (
    <div>
      <TinyLine {...config} />
    </div>
  );
};
export default GraphLast7d;
