import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Footer = styled.footer`
    background: #333;

    color: #f5f5f5;
    text-align: center;
    margin-top: 1.5em;
    padding: 1em;
    position: sticky;
    bottom: 0;
    width: 100%;
  `;

  return (
    <Footer>
      <p>Precaucion : Valores son estimados.</p>
      <p>
        Bootcamp de FEWD de General Assembly/ Fundación Adecco. Hecho por
        Franklin Reyes Marchell
      </p>
    </Footer>
  );
};

export default Footer;
