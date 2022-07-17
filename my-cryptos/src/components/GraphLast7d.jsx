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
  console.log("entre en el grafico" + spark);
  if (spark.length > 0) {
    return (
      <div>
        console.log("spark.length mayor 0" );
        <TinyLine {...config} />
      </div>
    );
  } else {
    console.log("spark.length 0");
    return <div></div>;
  }
};
export default GraphLast7d;
