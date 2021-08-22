import React from "react";
import styled from "styled-components";
import { COLORS } from "../utils/COLOR";
import { SearchIcon } from "../utils/icon";

export function Searchbar({
  query,
  setQuery,
}: {
  query?: string;
  setQuery: (query: string) => void;
}) {
  return (
    <SearchbarContainer>
      <SearchbarInput
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
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
  border-radius: 0.5rem;
  background-color: ${COLORS.GREY};
`;

const SearchbarInput = styled.input`
  background-color: ${COLORS.GREY};
  width: 100%;
  border: none;
  font-size: 1rem;
  padding: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  outline: none;
`;

const ContainSearchIcon = styled.div`
  text-align: center;
  cursor: pointer;
  padding: 1rem;
  transition: 0.2s color ease-in;
  &:hover {
    color: ${COLORS.TERTIARY};
  }
`;
