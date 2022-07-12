import React from "react";

import { TinyLine } from "@ant-design/plots";
//import { Line } from "@ant-design/plots";

const GraphLast7d = ({ spark, color, nombre }) => {
  const data2 = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
    546, 983, 340, 539, 243, 226, 192,
  ];

  const data = spark;

  console.log("const data=>" + typeof data);
  console.log("const spark=>" + typeof spark);

  console.log("spark recibido en spark 7d: " + nombre + spark);

  const config = {
    height: 60,
    width: 40,
    autoFit: false,
    renderer: "svg",
    data,
    smooth: true,
    color: color,
  };

  return (
    <div>
      <TinyLine {...config} />
    </div>
  );
};
export default GraphLast7d;
