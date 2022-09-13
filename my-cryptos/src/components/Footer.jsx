import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Footer = styled.footer`
    background: #2f2f2f;
    padding: 0.5em;
    color: #f5f5f5;
    text-align: center;
    margin-top: 1.5em;
    padding: 1em;
  `;
  return (
    <Footer>
      Proyecto final del Bootcamp de FEWD de General Assembly/ Fundación Adecco.
      Hecho por Franklin Reyes Marchel
    </Footer>
  );
};

export default Footer;
