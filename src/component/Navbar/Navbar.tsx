import React from "react";
import styled from "styled-components";
import { ShoppingCart } from "../../utils/icon";
import { COLORS } from "../../utils/icon/COLOR";

export function Navbar() {
  return (
    <NavbarContainer>
      <NavMenu>HOME</NavMenu>
      <NavMenu>
        <ShoppingCart />
      </NavMenu>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  display: flex;
  padding: 2rem 1rem;
  justify-content: space-between;
  background-color: ${COLORS.PRIMARY};
`;

const NavMenu = styled.a`
  font-weight: 800;
  color: ${COLORS.WHITE};
  transition: 0.2s color ease-in;
  &:hover {
    color: ${COLORS.TERTIARY};
  }
`;
