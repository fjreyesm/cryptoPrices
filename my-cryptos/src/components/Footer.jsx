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
      This website uses Google Analytics to collect visitor usage statistics.
    </Footer>
  );
};

export default Footer;
