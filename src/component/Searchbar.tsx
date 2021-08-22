import React from "react";
import styled from "styled-components";
import { COLORS } from "../utils/COLOR";
import { SearchIcon } from "../utils/icon";

export function Searchbar() {
  return (
    <SearchbarContainer>
      <SearchbarInput />
      <ContainSearchIcon>
        <SearchIcon width="100%" />
      </ContainSearchIcon>
    </SearchbarContainer>
  );
}

const SearchbarContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  background-color: ${COLORS.GREY};
`;

const SearchbarInput = styled.input`
  background-color: ${COLORS.GREY};
  width: 100%;
  border: none;
  font-size: 1rem;
  padding: 1rem;
  font-weight: 600;
  outline: none;
`;

const ContainSearchIcon = styled.div`
  text-align: center;
  cursor: pointer;
  min-width: 10%;
  transition: 0.2s color ease-in;
  &:hover {
    color: ${COLORS.TERTIARY};
  }
`;
