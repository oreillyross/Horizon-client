import * as React from "react";
import styled from "styled-components";

function randomColor() {
  return ["red", "orange", "yellow", "green", "blue", "purple"][
    (Math.random() * 6) | 0
  ];
}

export const TestBox = () => {
  return <div style={{ backgroundColor: `${randomColor()}` }}>Test Box</div>;
};
