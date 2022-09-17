import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  const Title = styled.h1`
    margin: 1em 0 0 0;
    letter-spacing: 0.8px;
    font-weight: bold;
    color: #f5f5f5;
    text-align: center;
    letter-spacing: 1.8px;
    background: #2f2f2f;
    padding: 0.5em;
    border-radius: 3px;
  `;

  return (
    <Link to="/">
      <div>
        <Title>Principales Criptomonedas por Capitalización</Title>
        <p>Precaucion : Valores son estimados.</p>
      </div>
    </Link>
  );
};

export default Header;
