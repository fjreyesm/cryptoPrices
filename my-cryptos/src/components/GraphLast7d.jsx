import React from "react";

import { TinyLine } from "@ant-design/plots";
//import { Line } from "lots";@ant-design/p

const GraphLast7d = ({ spark, color, nombre }) => {
  const data = spark;

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
