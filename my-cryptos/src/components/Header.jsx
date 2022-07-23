import React from "react";
import styled from "styled-components";

export function Caution() {
  return <p>Precaucion : Los precios de las criptomonedas son estimados.</p>;
}

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

  const Div = styled.div`
    margin-left: 15rem;
    margin-right: 150px;
    letter-spacing: 0.8px;
  `;
  return (
    <div>
      <Title>Principales Criptomonedas por Capitalización</Title>
      <Div>
        <Caution />
      </Div>
    </div>
  );
};

export default Header;
