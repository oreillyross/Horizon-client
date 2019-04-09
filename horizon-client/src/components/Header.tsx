import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: #2e8b57;
  padding-bottom: "3px";
  text-align: center;
  font-weight: bold;
`;

const Header = () => (
  <div>
    <StyledHeader>Horizon</StyledHeader>
  </div>
);

export default Header;
