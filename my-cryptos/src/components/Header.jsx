import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  const Title = styled.h1`
    margin: 1em 0 0 0;

    color: #f5f5f5;
    text-align: center;
    letter-spacing: 1.5px;
    background: #2f2f2f;
    padding: 0.5em;
    border-radius: 3px;
    background-color: #26272b;
    box-shadow: 0px 0px 12px #18191b;
    border-radius: 8px;
    margin: 1rem auto;
    padding: 0.7rem 1rem;
  `;

  return (
    <Link to="/">
      <div>
        <Title>Watchlist Criptos</Title>
      </div>
    </Link>
  );
};

export default Header;
