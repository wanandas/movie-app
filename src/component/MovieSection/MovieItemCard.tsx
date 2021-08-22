import styled from "styled-components";

export function MovieItemCard({ cover }: { cover: string }) {
  return (
    <MovieItemCardContainer>
      <h1 style={{ margin: "0" }}>title</h1>
      <Cover>
        <img src={`https://image.tmdb.org/t/p/w500${cover}`} alt="" />
      </Cover>
    </MovieItemCardContainer>
  );
}

const MovieItemCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

const Cover = styled.div`
  position: relative;
  overflow: hidden;

  & img {
    aspect-ratio: 1;
    width: 100%;
    object-fit: contain;
  }
`;
