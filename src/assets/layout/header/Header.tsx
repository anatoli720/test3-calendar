import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <input type="text" placeholder="select a user" />
      <div>
        <input type="text" placeholder="egister a new user" />{" "}
        <button>Add</button>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
 background-color: #b1f39d;
 display: flex;
 justify-content: space-between;
`