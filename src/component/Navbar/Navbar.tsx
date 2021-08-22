import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ShoppingCart } from "../../utils/icon";
import { COLORS } from "../../utils/COLOR";
import { Link } from "react-router-dom";
import { MovieContext } from "../../store/MovieProvider";

export function Navbar() {
  const { state } = useContext(MovieContext);

  const [count, setCount] = useState(state.movieIdList.length);

  useEffect(() => {
    setCount(state.movieIdList.length);
    localStorage.setItem("myMovieId", JSON.stringify(state.movieIdList));
  }, [state.movieIdList]);
  return (
    <NavbarContainer>
      <NavMenu to="/" style={{ textDecoration: "none" }}>
        HOME
      </NavMenu>
      <NavMenu to="/cart">
        <CountItemContainer>
          <ShoppingCart size="lg" />
          {count > 0 && <CountItem>{count}</CountItem>}
        </CountItemContainer>
      </NavMenu>
    </NavbarContainer>
  );
}

const CountItem = styled.div`
  position: absolute;
  top: -30%;
  background-color: red;
  margin: 0;
  height: 14px;
  text-align: center;
  width: 14px;
  right: -30%;
  font-size: 12px;
  border-radius: 50%;
`;
const CountItemContainer = styled.div`
  position: relative;
`;

const NavbarContainer = styled.nav`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  margin: 0 auto;
  background-color: ${COLORS.PRIMARY};
`;

const NavMenu = styled(Link)`
  font-weight: 800;
  color: ${COLORS.WHITE};
  transition: 0.2s color ease-in;
  &:hover {
    color: ${COLORS.TERTIARY};
  }
`;
