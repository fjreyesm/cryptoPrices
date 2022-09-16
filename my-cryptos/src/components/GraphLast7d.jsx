import React from "react";
import styled from "styled-components";
import { TinyLine } from "@ant-design/plots";

//import { Line } from "lots";@ant-design/p

const GraphLast7d = ({ spark, color, nombre }) => {
  const data = spark;

  const config = {
    height: 500,
    width: 300,
    autoFit: true,
    renderer: "svg",
    data,
    smooth: true,
    color: color,
    annotations: [
      {
        type: "line",
        start: ["min", "mean"],
        end: ["max", "mean"],
        text: {
          content: "",
          offsetY: -2,
          style: {
            textAlign: "left",
            fontSize: 10,
            fill: "rgba(44, 53, 66, 0.45)",
            textBaseline: "bottom",
          },
        },
        style: {
          stroke: "rgba(0, 0, 0, 0.25)",
        },
      },
    ],
  };
  const Div = styled.div`
    width: 50px;
    height: 60px;
    align-items: center;
  `;
  if (spark.length > 0) {
    return (
      <Div>
        <TinyLine {...config} />
      </Div>
    );
  } else {
    return <div></div>;
  }
};
export default GraphLast7d;
