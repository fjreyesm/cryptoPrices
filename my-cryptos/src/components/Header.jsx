import React from "react";
import styled from "styled-components";

const Header = () => {
  const Title = styled.h1`
    font-size: 1.5em;
    margin: 1em 0 0 0;
    letter-spacing: 0.8px;
    font-weight: bold;
    color: #f5f5f5;
    text-align: center;

    background: #2f2f2f;
    padding: 0.5em;
    border-radius: 3px;
  `;
  return (
    <div>
      <Title>Principales Critomonedas por capitalización</Title>
    </div>
  );
};

export default Header;
